export interface Task {
  id: string
  title: string
  content: any
  icon: string
  createdByUser?:{
    image: string
    name: string
  }
  updatedByUser?:{
    image: string
    name: string
  }
  updated_at: string
  created_at: string
}
