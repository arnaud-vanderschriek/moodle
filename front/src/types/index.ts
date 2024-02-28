export type User = {
		id: null | number,
    userName: "",
    email:"",
    roleID: UserType | null,
    cursusId: null | number,
    roles:null,
    cursus:null
}

enum UserType {
	student = 1,
	teacher = 2,
	admin = 3
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
	id?: number,
	name: string,
	description: string,
	startDate: Date,
	endDate: Date,
	userID?: number,
}