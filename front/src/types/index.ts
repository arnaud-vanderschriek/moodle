export type User = {
	username: string | FormDataEntryValue | null,
	email?: string,
	userType?: UserType,
	isAuthenticated?: boolean
}

enum UserType {
	student,
	teacher,
	admin
}

export type LoginData = {
	username: FormDataEntryValue | null,
	password: FormDataEntryValue | null
}