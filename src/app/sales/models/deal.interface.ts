export interface IDeal {
    readonly id: number
    first_name: string
    last_name: string
    email: string
    phone: string
    company: string
    status: string
    date: string
    probability_status: string
    state: string
}
export type DealWithoutID = Omit<IDeal, 'id'>
export type DealProperty<T = { [K in keyof DealWithoutID]: Pick<IDeal, K> }> = T[keyof T]

