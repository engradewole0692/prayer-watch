import {
  Bell,
  BookOpen,
  CalendarCheck,
  Heart,
  Layers,
  Target,
  TrendingUp,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react"

export type Feature = {
  title: string
  description: string
  icon: LucideIcon
}

export const features: Feature[] = [
  {
    title: "Prayer Reminders",
    description: "Set reminders and stay consistent with prayer.",
    icon: Bell,
  },
  {
    title: "Prayer Streaks",
    description: "Build and maintain a consistent prayer routine.",
    icon: CalendarCheck,
  },
  {
    title: "Prayer Projects",
    description: "Create and participate in focused prayer projects.",
    icon: Layers,
  },
  {
    title: "Prayer Community",
    description: "Connect, share prayer requests, and pray together.",
    icon: Users,
  },
  {
    title: "Bible Reading",
    description: "Read and reflect on God's Word.",
    icon: BookOpen,
  },
  {
    title: "Milestones",
    description: "Track prayer progress and celebrate achievements.",
    icon: Trophy,
  },
]

export const helpPoints: Feature[] = [
  {
    title: "Develop a consistent prayer lifestyle",
    description: "Reminders and streaks help prayer become part of the day.",
    icon: Heart,
  },
  {
    title: "Set prayer targets",
    description: "Choose a prayer time and keep it in view.",
    icon: Target,
  },
  {
    title: "Participate in prayer projects",
    description: "Join focused seasons of prayer with a clear purpose.",
    icon: Layers,
  },
  {
    title: "Connect with other believers",
    description: "Share requests and pray alongside a community.",
    icon: Users,
  },
  {
    title: "Read the Bible",
    description: "Keep Scripture beside your prayers.",
    icon: BookOpen,
  },
  {
    title: "Track spiritual progress",
    description: "Milestones mark faithfulness over time.",
    icon: TrendingUp,
  },
]
