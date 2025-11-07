

import React from "react";
import { Link } from "react-router-dom";
// Dummy data (replace with your real API data)
const team = {
  id: "team_1",
  name: "Product Team",
  description: "Design & build new product features",
  members: [
    { id: "u1", name: "Anita", avatar: "https://i.pravatar.cc/40?img=1" },
    { id: "u2", name: "Rahul", avatar: "https://i.pravatar.cc/40?img=2" },
    { id: "u3", name: "Priya", avatar: "https://i.pravatar.cc/40?img=3" },
    { id: "u4", name: "Karan", avatar: "https://i.pravatar.cc/40?img=4" },
  ],
  stats: {
    tasksDueToday: 3,
    openTasks: 14,
    membersOnline: 2,
  },
  recent: [
    { id: 1, text: "Priya moved 'Login UI' → In Progress", time: "2h ago" },
    { id: 2, text: "Rahul commented on 'Billing flow'", time: "5h ago" },
    { id: 3, text: "Anita uploaded 'design_v2.png'", time: "1d ago" },
  ],
  tasks: [
    { id: "t1", title: "Login UI", status: "In Progress", assignee: "Priya", due: "Today" },
    { id: "t2", title: "Billing API", status: "Todo", assignee: "Rahul", due: "2d" },
    { id: "t3", title: "Onboarding copy", status: "Todo", assignee: "Anita", due: "4d" },
  ],
};

export default function TeamDashboard() {
  return (
    <div className="min-h-screen p-6 bg-background text-foreground">
      {/* Team Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold">{team.name}</h2>
          <p className="text-sm text-muted-foreground mt-1 max-w-xl">{team.description}</p>

          <div className="flex items-center gap-2 mt-3">
            {/* member avatars */}
            <div className="flex -space-x-2">
              {team.members.map((m) => (
                <img
                  key={m.id}
                  src={m.avatar}
                  alt={m.name}
                  className="h-9 w-9 rounded-full ring-2 ring-background"
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground ml-3">{team.members.length} members</span>
          </div>
        </div>

        {/* Quick actions */}
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-95">
            Start Call
          </button>
          <button className="px-4 py-2 rounded-md border border-border text-sm">
            Invite
          </button>
        </div>
      </div>

      {/* Grid content */}
      <div className="mt-8 grid grid-cols-12 gap-6">
        {/* Left column: main widgets */}
        <div className="col-span-8 space-y-6">
          {/* Stat cards */}
          <div className="grid grid-cols-3 gap-4">
            <StatCard title="Tasks due today" value={team.stats.tasksDueToday} />
            <StatCard title="Open tasks" value={team.stats.openTasks} />
            <StatCard title="Members online" value={team.stats.membersOnline} />
          </div>

          {/* Tasks preview (kanban-lite) */}
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-medium">Tasks</h3>
              <button className="text-sm text-muted-foreground">View all</button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {/* Todo column */}
              <div>
                <h4 className="text-sm font-medium mb-2">Todo</h4>
                <div className="space-y-2">
                  {team.tasks.filter(t => t.status === "Todo").map(t => (
                    <TaskCard key={t.id} title={t.title} assignee={t.assignee} due={t.due} />
                  ))}
                </div>
              </div>

              {/* In Progress column */}
              <div>
                <h4 className="text-sm font-medium mb-2">In Progress</h4>
                <div className="space-y-2">
                  {team.tasks.filter(t => t.status === "In Progress").map(t => (
                    <TaskCard key={t.id} title={t.title} assignee={t.assignee} due={t.due} />
                  ))}
                </div>
              </div>

              {/* Done column */}
              <div>
                <h4 className="text-sm font-medium mb-2">Done</h4>
                <div className="space-y-2">
                  {/* no done tasks in demo */}
                  <div className="text-sm text-muted-foreground">No completed tasks yet</div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent activity */}
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-3">Recent Activity</h3>
            <ul className="space-y-3">
              {team.recent.map(a => (
                <li key={a.id} className="flex items-start gap-3">
                  <div className="h-8 w-8 rounded-full bg-muted/40 flex items-center justify-center text-sm">
                    {String(a.text).charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm">{a.text}</div>
                    <div className="text-xs text-muted-foreground mt-1">{a.time}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right column: chat preview, files, settings */}
        <aside className="col-span-4 space-y-6">
          {/* Chat preview */}
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-lg font-medium">Team Chat</h4>
              <button className="text-sm text-muted-foreground">Open</button>
            </div>
            <div className="space-y-3 max-h-48 overflow-auto">
              <div className="text-sm">
                <strong>Priya:</strong> Started working on Login UI
              </div>
              <div className="text-sm">
                <strong>Rahul:</strong> Need API keys for Billing
              </div>
              <div className="text-sm">
                <strong>Anita:</strong> Uploaded new mocks
              </div>
            </div>

            <div className="mt-3">
              <input
                placeholder="Send a message..."
                className="w-full px-3 py-2 rounded-md border border-border bg-transparent"
              />
            </div>
          </div>

          {/* Files / quick links */}
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium mb-3">Recent Files</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>design_v2.png</li>
              <li>specs.pdf</li>
              <li>product_plan.md</li>
            </ul>
          </div>

          {/* Team settings */}
          <div className="bg-card p-4 rounded-lg shadow-sm">
            <h4 className="text-lg font-medium mb-3">Team Settings</h4>
            <div className="flex flex-col gap-2 text-sm">
              <button className="px-3 py-2 rounded-md border border-border text-left">Manage members</button>
              <button className="px-3 py-2 rounded-md border border-border text-left">Integrations</button>
              <Link to="/dashboard">
                <button className="px-3 py-2 rounded-md border border-destructive text-left text-destructive">Leave Team</button>
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}

/* -------------------------
  Helper small components
   ------------------------- */

function StatCard({ title, value }: { title: string; value: number }) {
  return (
    <div className="bg-card p-4 rounded-lg shadow-sm flex flex-col">
      <span className="text-sm text-muted-foreground">{title}</span>
      <span className="text-2xl font-semibold mt-2">{value}</span>
    </div>
  );
}

function TaskCard({ title, assignee, due }: { title: string; assignee: string; due: string }) {
  return (
    <div className="p-3 bg-background/50 border border-border rounded-md">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium">{title}</div>
        <div className="text-xs text-muted-foreground">{due}</div>
      </div>
      <div className="text-xs text-muted-foreground mt-2">Assigned to: {assignee}</div>
    </div>
  );
}
