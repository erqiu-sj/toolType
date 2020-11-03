/*
 * @Author: 邱狮杰
 * @Date: 2020-11-03 17:03:07
 * @LastEditTime: 2020-11-03 17:30:17
 * @FilePath: /toolType/src/index.ts
 * @Description: 工具类型
 */

/**
 * 如果当我们从子接口继承父借口的时候，想改变其中一个和父共有属性的类型，是会报错的，但是这个之后有需要重写这个属性的类型
 * 这个时候就需要OverrideType了
 */
// T 基于哪个借口？U 需要被重写的属性名
// interface Chicken {
//   name: string;
//   age: number;
//   egg: number;
// }

// interface NewChicken extends Pick<Chicken, Exclude<keyof Chicken, "name">> {
//   name: number;
// }
export type OverrideType<T, U> = Pick<T, Exclude<keyof T, U>>;
