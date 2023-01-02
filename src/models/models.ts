export interface User{
    id: number
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface Note{
    id: number
    title?: string
    content: string
    projectId?: number
    userId?: number
}

export interface Job{
    id: number
    title?: string
    dueDate?: number
    content: string
}

export interface Project{
    id: number
    title: string
    dueDate?: number
    description?: string
    Jobs?: Job[]
    Notes?: Note[]
}