'use client';

import { useEffect, useState } from 'react';
import { getResults } from '@/app/api/client';

export function ResultsDisplay({ kitId, dob }: { kitId: string; dob: string }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const data = await getResults(kitId, dob);
        // For now, we're not using the results but this would be where we set them
        console.log('Results fetched:', data);
      } catch (error) {
        console.error(error);
        // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [kitId, dob]);

  if (loading) {
    return <div>Loading results...</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Test Results</h2>
      <p className="text-gray-600">
        Results for Kit ID: {kitId}
      </p>
      {/* Results will be displayed here when implemented */}
      <div className="p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-500">
          Results display component - implementation in progress
        </p>
      </div>
    </div>
  );
}
