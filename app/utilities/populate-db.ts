
import authService from "../feature-modules/auth/auth.service"
import roleService from "../feature-modules/role/role.service"
import { adminData, roleData } from "./constants"

export const populateDB = async () => {
    try {
        for (let role of roleData) {
            await roleService.create(role)
        }
        for (let admin of adminData) {
            await authService.register(admin)
        }

    } catch (error) {
        console.log('COULD NOT POPULATE DB: ', error)
    }

}

