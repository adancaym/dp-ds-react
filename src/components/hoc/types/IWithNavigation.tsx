import { type INavigation, type IWith } from 'src/components'

export type IWithNavigation<T> = IWith<T> & {
  routes: INavigation[]
}
