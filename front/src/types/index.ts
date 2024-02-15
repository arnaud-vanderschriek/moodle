export type User = {
	id?: number,
	name: string,
	email?: string,
	roleID?: UserType,
	assessmentResults?: null
}

enum UserType {
	teacher,
	student,
	admin
}

export type LoginData = {
	user: User | null,
	isAuthenticated?: boolean,
	token?: string | null
}

export type LoginFormData = {
	username: string,
	password: string,
}

export type Courses = {
	id: number,
	name: string,
	description: string,
	startDate: Date,
	endDate: Date,
	userID: number,
}