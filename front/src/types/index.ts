export type User = {
	id?: number,
	username: string | FormDataEntryValue | null,
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