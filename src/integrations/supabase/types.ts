export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      attorney_specialties: {
        Row: {
          attorney_id: string
          created_at: string | null
          id: string
          specialty: string
        }
        Insert: {
          attorney_id: string
          created_at?: string | null
          id?: string
          specialty: string
        }
        Update: {
          attorney_id?: string
          created_at?: string | null
          id?: string
          specialty?: string
        }
        Relationships: [
          {
            foreignKeyName: "attorney_specialties_attorney_id_fkey"
            columns: ["attorney_id"]
            isOneToOne: false
            referencedRelation: "attorneys"
            referencedColumns: ["id"]
          },
        ]
      }
      attorneys: {
        Row: {
          available_within_hours: number | null
          bar_number: string | null
          consultation_fee: number | null
          created_at: string | null
          degree: string | null
          experience_years: number | null
          id: string
          languages: string[] | null
          law_firm: string | null
          law_school: string | null
          location: string | null
          practice_area: string | null
          success_rate: number | null
          user_id: string
        }
        Insert: {
          available_within_hours?: number | null
          bar_number?: string | null
          consultation_fee?: number | null
          created_at?: string | null
          degree?: string | null
          experience_years?: number | null
          id?: string
          languages?: string[] | null
          law_firm?: string | null
          law_school?: string | null
          location?: string | null
          practice_area?: string | null
          success_rate?: number | null
          user_id: string
        }
        Update: {
          available_within_hours?: number | null
          bar_number?: string | null
          consultation_fee?: number | null
          created_at?: string | null
          degree?: string | null
          experience_years?: number | null
          id?: string
          languages?: string[] | null
          law_firm?: string | null
          law_school?: string | null
          location?: string | null
          practice_area?: string | null
          success_rate?: number | null
          user_id?: string
        }
        Relationships: []
      }
      cars: {
        Row: {
          condition: string
          created_at: string | null
          description: string | null
          id: number
          location: string
          make: string
          mileage: number
          model: string
          price: number
          seller_id: string | null
          year: number
        }
        Insert: {
          condition: string
          created_at?: string | null
          description?: string | null
          id?: number
          location: string
          make: string
          mileage: number
          model: string
          price: number
          seller_id?: string | null
          year: number
        }
        Update: {
          condition?: string
          created_at?: string | null
          description?: string | null
          id?: number
          location?: string
          make?: string
          mileage?: number
          model?: string
          price?: number
          seller_id?: string | null
          year?: number
        }
        Relationships: []
      }
      favorites: {
        Row: {
          buyer_id: string
          car_id: number
          created_at: string | null
          id: number
        }
        Insert: {
          buyer_id: string
          car_id: number
          created_at?: string | null
          id?: number
        }
        Update: {
          buyer_id?: string
          car_id?: number
          created_at?: string | null
          id?: number
        }
        Relationships: [
          {
            foreignKeyName: "favorites_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "car_listing"
            referencedColumns: ["car_id"]
          },
          {
            foreignKeyName: "favorites_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "cars"
            referencedColumns: ["id"]
          },
        ]
      }
      friends: {
        Row: {
          created_at: string | null
          friends_id: string | null
          user_friends_: number
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          friends_id?: string | null
          user_friends_?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          friends_id?: string | null
          user_friends_?: number
          user_id?: string | null
        }
        Relationships: []
      }
      fruits: {
        Row: {
          color: string
          id: string
          image_url: string
          name: string
          price: number
        }
        Insert: {
          color: string
          id?: string
          image_url: string
          name: string
          price: number
        }
        Update: {
          color?: string
          id?: string
          image_url?: string
          name?: string
          price?: number
        }
        Relationships: []
      }
      goals: {
        Row: {
          archived: boolean
          created_at: string
          description: string | null
          id: number
          no_tasks: number
          no_tasks_completed: number
          status: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          archived?: boolean
          created_at?: string
          description?: string | null
          id?: number
          no_tasks?: number
          no_tasks_completed?: number
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          archived?: boolean
          created_at?: string
          description?: string | null
          id?: number
          no_tasks?: number
          no_tasks_completed?: number
          status?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      legal_specialties: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      offers: {
        Row: {
          buyer_id: string
          car_id: number
          created_at: string | null
          id: number
          price: number
          text: string | null
        }
        Insert: {
          buyer_id: string
          car_id: number
          created_at?: string | null
          id?: number
          price: number
          text?: string | null
        }
        Update: {
          buyer_id?: string
          car_id?: number
          created_at?: string | null
          id?: number
          price?: number
          text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "offers_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "car_listing"
            referencedColumns: ["car_id"]
          },
          {
            foreignKeyName: "offers_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "cars"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          created_at: string | null
          description: string | null
          post_id: number
          postpic: string | null
          title: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          post_id?: number
          postpic?: string | null
          title?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          post_id?: number
          postpic?: string | null
          title?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      products: {
        Row: {
          capacity: number | null
          condition: string | null
          created_at: string | null
          form_factor: string | null
          id: number
          link: string | null
          name: string
          price: number | null
          price_per_capacity: number | null
          tech: string | null
          warranty: number | null
        }
        Insert: {
          capacity?: number | null
          condition?: string | null
          created_at?: string | null
          form_factor?: string | null
          id?: number
          link?: string | null
          name: string
          price?: number | null
          price_per_capacity?: number | null
          tech?: string | null
          warranty?: number | null
        }
        Update: {
          capacity?: number | null
          condition?: string | null
          created_at?: string | null
          form_factor?: string | null
          id?: number
          link?: string | null
          name?: string
          price?: number | null
          price_per_capacity?: number | null
          tech?: string | null
          warranty?: number | null
        }
        Relationships: []
      }
      profile: {
        Row: {
          created_at: string | null
          email: string | null
          first_name: string | null
          full_name: string | null
          id: number
          last_name: string | null
          phone: string | null
          profile_URL: string | null
          role: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          full_name?: string | null
          id?: number
          last_name?: string | null
          phone?: string | null
          profile_URL?: string | null
          role?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          first_name?: string | null
          full_name?: string | null
          id?: number
          last_name?: string | null
          phone?: string | null
          profile_URL?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      profile_old: {
        Row: {
          created_at: string
          email: string | null
          first_name: string | null
          id: number
          last_name: string | null
          profile_picture: string | null
          role: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          profile_picture?: string | null
          role?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          profile_picture?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      reviews: {
        Row: {
          car_id: number
          created_at: string | null
          id: number
          rating: number
          review: string | null
          seller_id: string
        }
        Insert: {
          car_id: number
          created_at?: string | null
          id?: number
          rating: number
          review?: string | null
          seller_id: string
        }
        Update: {
          car_id?: number
          created_at?: string | null
          id?: number
          rating?: number
          review?: string | null
          seller_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "car_listing"
            referencedColumns: ["car_id"]
          },
          {
            foreignKeyName: "reviews_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "cars"
            referencedColumns: ["id"]
          },
        ]
      }
      roles: {
        Row: {
          id: number
          role_name: string
        }
        Insert: {
          id?: never
          role_name: string
        }
        Update: {
          id?: never
          role_name?: string
        }
        Relationships: []
      }
      submissions: {
        Row: {
          attorney_id: string | null
          client_id: string
          created_at: string | null
          description: string | null
          historical_stages: Json | null
          id: string
          legal_category: string
          quote_amount: number | null
          quote_message: string | null
          quote_status: string | null
          stage_status: string | null
          status_code: string
          updated_at: string | null
          urgency_level: string
        }
        Insert: {
          attorney_id?: string | null
          client_id: string
          created_at?: string | null
          description?: string | null
          historical_stages?: Json | null
          id?: string
          legal_category: string
          quote_amount?: number | null
          quote_message?: string | null
          quote_status?: string | null
          stage_status?: string | null
          status_code?: string
          updated_at?: string | null
          urgency_level: string
        }
        Update: {
          attorney_id?: string | null
          client_id?: string
          created_at?: string | null
          description?: string | null
          historical_stages?: Json | null
          id?: string
          legal_category?: string
          quote_amount?: number | null
          quote_message?: string | null
          quote_status?: string | null
          stage_status?: string | null
          status_code?: string
          updated_at?: string | null
          urgency_level?: string
        }
        Relationships: [
          {
            foreignKeyName: "submissions_attorney_id_fkey"
            columns: ["attorney_id"]
            isOneToOne: false
            referencedRelation: "attorneys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "submissions_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          },
        ]
      }
      tasks: {
        Row: {
          complete: boolean
          created_at: string
          description: string | null
          goal_id: number | null
          id: number
          title: string | null
          user_id: string | null
        }
        Insert: {
          complete?: boolean
          created_at?: string
          description?: string | null
          goal_id?: number | null
          id?: number
          title?: string | null
          user_id?: string | null
        }
        Update: {
          complete?: boolean
          created_at?: string
          description?: string | null
          goal_id?: number | null
          id?: number
          title?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tasks_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "goals"
            referencedColumns: ["id"]
          },
        ]
      }
      todos: {
        Row: {
          id: number
          inserted_at: string
          is_complete: boolean | null
          task: string | null
          user_id: string
        }
        Insert: {
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          task?: string | null
          user_id: string
        }
        Update: {
          id?: number
          inserted_at?: string
          is_complete?: boolean | null
          task?: string | null
          user_id?: string
        }
        Relationships: []
      }
      transactions: {
        Row: {
          car_id: number
          created_at: string | null
          id: number
          price: number
          type: string
        }
        Insert: {
          car_id: number
          created_at?: string | null
          id?: number
          price: number
          type: string
        }
        Update: {
          car_id?: number
          created_at?: string | null
          id?: number
          price?: number
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "car_listing"
            referencedColumns: ["car_id"]
          },
          {
            foreignKeyName: "transactions_car_id_fkey"
            columns: ["car_id"]
            isOneToOne: false
            referencedRelation: "cars"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      car_listing: {
        Row: {
          average_rating: number | null
          car_created_at: string | null
          car_id: number | null
          condition: string | null
          description: string | null
          location: string | null
          make: string | null
          mileage: number | null
          model: string | null
          number_of_reviews: number | null
          price: number | null
          seller_email: string | null
          seller_id: string | null
          year: number | null
        }
        Relationships: []
      }
    }
    Functions: {
      create_conversation: {
        Args: { creator_id: string; participant_id: string }
        Returns: string
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
