export const ROLES = {
    ADMIN: '1',
    WORKER: '2'
}
export const METER_TYPES = {
    NORMAL: "normal",
    COMMERCIAL: "commercial",
    SOLAR: "solar"
}

export const METER_DATA = {
    NORMAL: {
        name: "normal",
        rate: 8
    },
    COMMERCIAL: {
        name: "commercial",
        rate: 16
    },
    SOLAR: {
        name: "solar",
        rate: 4
    }
}

export const roleData = [{ _id: ROLES.ADMIN, name: "admin" }, { _id: ROLES.WORKER, name: "worker" }]

export const adminData = [
    {
        name: "admin",
        email: "admin@admin.com",
        password: "admin",
        role: ROLES.ADMIN,
    }
]
