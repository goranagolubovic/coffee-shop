export const formatFormData: any = (formData: any) => {
    return {
        "EmailFrom": formData.email,
        "NameFrom": formData.name,
        "Message1": formData.message

    }
}