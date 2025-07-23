import { Metadata } from 'next';
import { Button } from '@/components/ui/button';

export const metadata: Metadata = {
  title: 'Dashboard | famBam',
  description: 'Your shared household planner',
};

export default function DashboardPage() {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Welcome to your Dashboard 👋</h1>
      <p className="text-muted-foreground">Plan meals, track expenses, and manage your household — together.</p>

      <div className="border rounded-lg p-4 space-y-4">
        <h2 className="text-xl font-semibold">Quick Actions</h2>
        <div className="flex gap-2 flex-wrap">
          <Button variant="default">Add Grocery Item</Button>
          <Button variant="outline">Set Weekly Budget</Button>
          <Button variant="ghost">Invite Member</Button>
        </div>
      </div>
    </main>
  );
}
