'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { deleteThought } from '../write/actions';

interface AdminControlsProps {
  slug: string;
}

export default function AdminControls({ slug }: AdminControlsProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    setError('');
    setIsModalOpen(false);

    try {
      const res = await deleteThought(slug);
      if (res.success) {
        router.push('/thoughts');
      } else {
        setError(res.message);
        setIsDeleting(false);
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred deleting file.');
      setIsDeleting(false);
    }
  };

  return (
    <>
      <div className="bg-pill-bg border border-border-main rounded-xl p-4 sm:p-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs font-mono">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
          <span className="font-bold text-text-primary uppercase tracking-wider">ADMIN MODE ACTIVE</span>
          {error && <span className="text-red-500 ml-2">({error})</span>}
        </div>

        <div className="flex items-center gap-6">
          <Link 
            href={`/thoughts/write?edit=${slug}`}
            className="font-bold text-accent border-b border-accent hover:text-text-primary hover:border-text-primary pb-0.5 transition-colors"
          >
            Edit Thought
          </Link>
          <button 
            onClick={() => setIsModalOpen(true)}
            disabled={isDeleting}
            className="font-bold text-red-500 border-b border-red-500 hover:text-red-600 hover:border-red-600 pb-0.5 disabled:text-text-muted disabled:border-text-muted transition-colors cursor-pointer"
          >
            {isDeleting ? 'Deleting...' : 'Delete Thought'}
          </button>
        </div>
      </div>

      {/* Premium Custom Deletion Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop Blur Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
            onClick={() => setIsModalOpen(false)}
          />
          
          {/* Modal Box */}
          <div className="relative bg-bg-paper border border-border-main rounded-xl p-6 sm:p-8 max-w-[420px] w-full flex flex-col gap-6 shadow-xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-mono tracking-widest text-red-500 font-bold uppercase">
                Confirm Deletion
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold tracking-tight text-text-primary">
                Delete this Article?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed">
                Are you sure you want to permanently delete this thought from disk? This action cannot be undone.
              </p>
            </div>

            <div className="flex justify-end gap-3 font-mono text-xs">
              <button 
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2.5 border border-border-main hover:bg-pill-hover rounded-lg text-text-primary transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button 
                onClick={handleDelete}
                className="px-4 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors cursor-pointer font-bold"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
