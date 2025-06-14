import { createClient } from '@supabase/supabase-js'

// These will be automatically provided by Lovable's Supabase integration
const supabaseUrl = window.location.origin.includes('lovableproject.com') 
  ? 'https://your-project.supabase.co' // This will be replaced by Lovable
  : 'https://your-project.supabase.co'

const supabaseAnonKey = 'your-anon-key' // This will be replaced by Lovable

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      skills: {
        Row: {
          id: string
          name: string
          level: number
          category: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          level: number
          category: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          level?: number
          category?: string
          created_at?: string
        }
      }
      services: {
        Row: {
          id: string
          title: string
          description: string
          icon: string
          features: string[]
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          icon: string
          features: string[]
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          icon?: string
          features?: string[]
          created_at?: string
        }
      }
      projects: {
        Row: {
          id: string
          title: string
          description: string
          image: string
          technologies: string[]
          live_url: string | null
          github_url: string | null
          featured: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          description: string
          image: string
          technologies: string[]
          live_url?: string | null
          github_url?: string | null
          featured?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          description?: string
          image?: string
          technologies?: string[]
          live_url?: string | null
          github_url?: string | null
          featured?: boolean
          created_at?: string
        }
      }
      testimonials: {
        Row: {
          id: string
          name: string
          role: string
          company: string
          content: string
          avatar: string
          rating: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          role: string
          company: string
          content: string
          avatar: string
          rating: number
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          role?: string
          company?: string
          content?: string
          avatar?: string
          rating?: number
          created_at?: string
        }
      }
      blog_posts: {
        Row: {
          id: string
          title: string
          excerpt: string
          content: string
          image: string
          author: string
          published_at: string
          tags: string[]
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          excerpt: string
          content: string
          image: string
          author: string
          published_at: string
          tags: string[]
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          excerpt?: string
          content?: string
          image?: string
          author?: string
          published_at?: string
          tags?: string[]
          created_at?: string
        }
      }
    }
  }
}