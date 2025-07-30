'use client';

import { useState, useEffect } from 'react';
import { ResultsDisplay } from '@/features/kit-registration/components/ResultsDisplay';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ResultsPage({ params }: { params: Promise<{ kitId: string }> }) {
  const [dob, setDob] = useState('');
  const [verified, setVerified] = useState(false);
  const [kitId, setKitId] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    params.then((resolvedParams) => {
      setKitId(resolvedParams.kitId);
      setLoading(false);
    });
  }, [params]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVerified(true);
  };

  if (loading) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <div>Loading...</div>
      </main>
    );
  }

  if (!verified) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <form onSubmit={handleSubmit}>
          <Label htmlFor="dob">Enter Your Date of Birth to View Results</Label>
          <Input id="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
          <Button type="submit" className="mt-4">View Results</Button>
        </form>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <ResultsDisplay kitId={kitId} dob={dob} />
    </main>
  );
}
