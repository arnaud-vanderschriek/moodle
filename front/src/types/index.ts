export type User = {
	id?: number,
	username: string | FormDataEntryValue | null,
	email?: string,
	userType?: UserType
}

enum UserType {
	student,
	teacher,
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