
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserPreferences
 * 
 */
export type UserPreferences = $Result.DefaultSelection<Prisma.$UserPreferencesPayload>
/**
 * Model MealEvent
 * 
 */
export type MealEvent = $Result.DefaultSelection<Prisma.$MealEventPayload>
/**
 * Model SwipeEvent
 * 
 */
export type SwipeEvent = $Result.DefaultSelection<Prisma.$SwipeEventPayload>
/**
 * Model MealPlan
 * 
 */
export type MealPlan = $Result.DefaultSelection<Prisma.$MealPlanPayload>
/**
 * Model MealPlanItem
 * 
 */
export type MealPlanItem = $Result.DefaultSelection<Prisma.$MealPlanItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LunchSource: {
  CAFE: 'CAFE',
  RESTAURANT: 'RESTAURANT',
  FAST_FOOD: 'FAST_FOOD',
  LEFTOVERS: 'LEFTOVERS',
  HOME_COOKED: 'HOME_COOKED',
  DELIVERY: 'DELIVERY',
  OTHER: 'OTHER'
};

export type LunchSource = (typeof LunchSource)[keyof typeof LunchSource]


export const SwipeDecision: {
  LIKE: 'LIKE',
  DISLIKE: 'DISLIKE',
  SKIP: 'SKIP'
};

export type SwipeDecision = (typeof SwipeDecision)[keyof typeof SwipeDecision]


export const PlanSource: {
  AI: 'AI',
  USER: 'USER',
  HYBRID: 'HYBRID'
};

export type PlanSource = (typeof PlanSource)[keyof typeof PlanSource]

}

export type LunchSource = $Enums.LunchSource

export const LunchSource: typeof $Enums.LunchSource

export type SwipeDecision = $Enums.SwipeDecision

export const SwipeDecision: typeof $Enums.SwipeDecision

export type PlanSource = $Enums.PlanSource

export const PlanSource: typeof $Enums.PlanSource

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userPreferences`: Exposes CRUD operations for the **UserPreferences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPreferences
    * const userPreferences = await prisma.userPreferences.findMany()
    * ```
    */
  get userPreferences(): Prisma.UserPreferencesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealEvent`: Exposes CRUD operations for the **MealEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealEvents
    * const mealEvents = await prisma.mealEvent.findMany()
    * ```
    */
  get mealEvent(): Prisma.MealEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.swipeEvent`: Exposes CRUD operations for the **SwipeEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SwipeEvents
    * const swipeEvents = await prisma.swipeEvent.findMany()
    * ```
    */
  get swipeEvent(): Prisma.SwipeEventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealPlan`: Exposes CRUD operations for the **MealPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealPlans
    * const mealPlans = await prisma.mealPlan.findMany()
    * ```
    */
  get mealPlan(): Prisma.MealPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mealPlanItem`: Exposes CRUD operations for the **MealPlanItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MealPlanItems
    * const mealPlanItems = await prisma.mealPlanItem.findMany()
    * ```
    */
  get mealPlanItem(): Prisma.MealPlanItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    UserPreferences: 'UserPreferences',
    MealEvent: 'MealEvent',
    SwipeEvent: 'SwipeEvent',
    MealPlan: 'MealPlan',
    MealPlanItem: 'MealPlanItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "userPreferences" | "mealEvent" | "swipeEvent" | "mealPlan" | "mealPlanItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserPreferences: {
        payload: Prisma.$UserPreferencesPayload<ExtArgs>
        fields: Prisma.UserPreferencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPreferencesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPreferencesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findFirst: {
            args: Prisma.UserPreferencesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPreferencesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          findMany: {
            args: Prisma.UserPreferencesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          create: {
            args: Prisma.UserPreferencesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          createMany: {
            args: Prisma.UserPreferencesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserPreferencesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          delete: {
            args: Prisma.UserPreferencesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          update: {
            args: Prisma.UserPreferencesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          deleteMany: {
            args: Prisma.UserPreferencesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserPreferencesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserPreferencesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>[]
          }
          upsert: {
            args: Prisma.UserPreferencesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPreferencesPayload>
          }
          aggregate: {
            args: Prisma.UserPreferencesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserPreferences>
          }
          groupBy: {
            args: Prisma.UserPreferencesGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPreferencesCountArgs<ExtArgs>
            result: $Utils.Optional<UserPreferencesCountAggregateOutputType> | number
          }
        }
      }
      MealEvent: {
        payload: Prisma.$MealEventPayload<ExtArgs>
        fields: Prisma.MealEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEventPayload>
          }
          findFirst: {
            args: Prisma.MealEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEventPayload>
          }
          findMany: {
            args: Prisma.MealEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEventPayload>[]
          }
          create: {
            args: Prisma.MealEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEventPayload>
          }
          createMany: {
            args: Prisma.MealEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEventPayload>[]
          }
          delete: {
            args: Prisma.MealEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEventPayload>
          }
          update: {
            args: Prisma.MealEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEventPayload>
          }
          deleteMany: {
            args: Prisma.MealEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEventPayload>[]
          }
          upsert: {
            args: Prisma.MealEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealEventPayload>
          }
          aggregate: {
            args: Prisma.MealEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealEvent>
          }
          groupBy: {
            args: Prisma.MealEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealEventCountArgs<ExtArgs>
            result: $Utils.Optional<MealEventCountAggregateOutputType> | number
          }
        }
      }
      SwipeEvent: {
        payload: Prisma.$SwipeEventPayload<ExtArgs>
        fields: Prisma.SwipeEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SwipeEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SwipeEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          findFirst: {
            args: Prisma.SwipeEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SwipeEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          findMany: {
            args: Prisma.SwipeEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>[]
          }
          create: {
            args: Prisma.SwipeEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          createMany: {
            args: Prisma.SwipeEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SwipeEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>[]
          }
          delete: {
            args: Prisma.SwipeEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          update: {
            args: Prisma.SwipeEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          deleteMany: {
            args: Prisma.SwipeEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SwipeEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SwipeEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>[]
          }
          upsert: {
            args: Prisma.SwipeEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SwipeEventPayload>
          }
          aggregate: {
            args: Prisma.SwipeEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSwipeEvent>
          }
          groupBy: {
            args: Prisma.SwipeEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<SwipeEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.SwipeEventCountArgs<ExtArgs>
            result: $Utils.Optional<SwipeEventCountAggregateOutputType> | number
          }
        }
      }
      MealPlan: {
        payload: Prisma.$MealPlanPayload<ExtArgs>
        fields: Prisma.MealPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findFirst: {
            args: Prisma.MealPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          findMany: {
            args: Prisma.MealPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          create: {
            args: Prisma.MealPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          createMany: {
            args: Prisma.MealPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          delete: {
            args: Prisma.MealPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          update: {
            args: Prisma.MealPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          deleteMany: {
            args: Prisma.MealPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>[]
          }
          upsert: {
            args: Prisma.MealPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanPayload>
          }
          aggregate: {
            args: Prisma.MealPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealPlan>
          }
          groupBy: {
            args: Prisma.MealPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealPlanCountArgs<ExtArgs>
            result: $Utils.Optional<MealPlanCountAggregateOutputType> | number
          }
        }
      }
      MealPlanItem: {
        payload: Prisma.$MealPlanItemPayload<ExtArgs>
        fields: Prisma.MealPlanItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MealPlanItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MealPlanItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          findFirst: {
            args: Prisma.MealPlanItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MealPlanItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          findMany: {
            args: Prisma.MealPlanItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>[]
          }
          create: {
            args: Prisma.MealPlanItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          createMany: {
            args: Prisma.MealPlanItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MealPlanItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>[]
          }
          delete: {
            args: Prisma.MealPlanItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          update: {
            args: Prisma.MealPlanItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          deleteMany: {
            args: Prisma.MealPlanItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MealPlanItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MealPlanItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>[]
          }
          upsert: {
            args: Prisma.MealPlanItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MealPlanItemPayload>
          }
          aggregate: {
            args: Prisma.MealPlanItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMealPlanItem>
          }
          groupBy: {
            args: Prisma.MealPlanItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<MealPlanItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.MealPlanItemCountArgs<ExtArgs>
            result: $Utils.Optional<MealPlanItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    userPreferences?: UserPreferencesOmit
    mealEvent?: MealEventOmit
    swipeEvent?: SwipeEventOmit
    mealPlan?: MealPlanOmit
    mealPlanItem?: MealPlanItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    meals: number
    swipes: number
    plans: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meals?: boolean | UserCountOutputTypeCountMealsArgs
    swipes?: boolean | UserCountOutputTypeCountSwipesArgs
    plans?: boolean | UserCountOutputTypeCountPlansArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSwipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeEventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
  }


  /**
   * Count Type MealPlanCountOutputType
   */

  export type MealPlanCountOutputType = {
    items: number
  }

  export type MealPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | MealPlanCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * MealPlanCountOutputType without action
   */
  export type MealPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanCountOutputType
     */
    select?: MealPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MealPlanCountOutputType without action
   */
  export type MealPlanCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string | null
    name: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    meals?: boolean | User$mealsArgs<ExtArgs>
    swipes?: boolean | User$swipesArgs<ExtArgs>
    plans?: boolean | User$plansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "email" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preferences?: boolean | User$preferencesArgs<ExtArgs>
    meals?: boolean | User$mealsArgs<ExtArgs>
    swipes?: boolean | User$swipesArgs<ExtArgs>
    plans?: boolean | User$plansArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      preferences: Prisma.$UserPreferencesPayload<ExtArgs> | null
      meals: Prisma.$MealEventPayload<ExtArgs>[]
      swipes: Prisma.$SwipeEventPayload<ExtArgs>[]
      plans: Prisma.$MealPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string | null
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preferences<T extends User$preferencesArgs<ExtArgs> = {}>(args?: Subset<T, User$preferencesArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    meals<T extends User$mealsArgs<ExtArgs> = {}>(args?: Subset<T, User$mealsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    swipes<T extends User$swipesArgs<ExtArgs> = {}>(args?: Subset<T, User$swipesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    plans<T extends User$plansArgs<ExtArgs> = {}>(args?: Subset<T, User$plansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.preferences
   */
  export type User$preferencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    where?: UserPreferencesWhereInput
  }

  /**
   * User.meals
   */
  export type User$mealsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventInclude<ExtArgs> | null
    where?: MealEventWhereInput
    orderBy?: MealEventOrderByWithRelationInput | MealEventOrderByWithRelationInput[]
    cursor?: MealEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealEventScalarFieldEnum | MealEventScalarFieldEnum[]
  }

  /**
   * User.swipes
   */
  export type User$swipesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    where?: SwipeEventWhereInput
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    cursor?: SwipeEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SwipeEventScalarFieldEnum | SwipeEventScalarFieldEnum[]
  }

  /**
   * User.plans
   */
  export type User$plansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    cursor?: MealPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserPreferences
   */

  export type AggregateUserPreferences = {
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  export type UserPreferencesAvgAggregateOutputType = {
    maxPrice: number | null
    radiusMiles: number | null
    lunchDays: number | null
  }

  export type UserPreferencesSumAggregateOutputType = {
    maxPrice: number | null
    radiusMiles: number | null
    lunchDays: number[]
  }

  export type UserPreferencesMinAggregateOutputType = {
    userId: string | null
    vegetarian: boolean | null
    vegan: boolean | null
    pescatarian: boolean | null
    halal: boolean | null
    kosher: boolean | null
    glutenFree: boolean | null
    dairyFree: boolean | null
    nutFree: boolean | null
    maxPrice: number | null
    radiusMiles: number | null
    updatedAt: Date | null
  }

  export type UserPreferencesMaxAggregateOutputType = {
    userId: string | null
    vegetarian: boolean | null
    vegan: boolean | null
    pescatarian: boolean | null
    halal: boolean | null
    kosher: boolean | null
    glutenFree: boolean | null
    dairyFree: boolean | null
    nutFree: boolean | null
    maxPrice: number | null
    radiusMiles: number | null
    updatedAt: Date | null
  }

  export type UserPreferencesCountAggregateOutputType = {
    userId: number
    vegetarian: number
    vegan: number
    pescatarian: number
    halal: number
    kosher: number
    glutenFree: number
    dairyFree: number
    nutFree: number
    allergies: number
    dislikedIngredients: number
    likedCuisines: number
    dislikedCuisines: number
    maxPrice: number
    radiusMiles: number
    lunchDays: number
    updatedAt: number
    _all: number
  }


  export type UserPreferencesAvgAggregateInputType = {
    maxPrice?: true
    radiusMiles?: true
    lunchDays?: true
  }

  export type UserPreferencesSumAggregateInputType = {
    maxPrice?: true
    radiusMiles?: true
    lunchDays?: true
  }

  export type UserPreferencesMinAggregateInputType = {
    userId?: true
    vegetarian?: true
    vegan?: true
    pescatarian?: true
    halal?: true
    kosher?: true
    glutenFree?: true
    dairyFree?: true
    nutFree?: true
    maxPrice?: true
    radiusMiles?: true
    updatedAt?: true
  }

  export type UserPreferencesMaxAggregateInputType = {
    userId?: true
    vegetarian?: true
    vegan?: true
    pescatarian?: true
    halal?: true
    kosher?: true
    glutenFree?: true
    dairyFree?: true
    nutFree?: true
    maxPrice?: true
    radiusMiles?: true
    updatedAt?: true
  }

  export type UserPreferencesCountAggregateInputType = {
    userId?: true
    vegetarian?: true
    vegan?: true
    pescatarian?: true
    halal?: true
    kosher?: true
    glutenFree?: true
    dairyFree?: true
    nutFree?: true
    allergies?: true
    dislikedIngredients?: true
    likedCuisines?: true
    dislikedCuisines?: true
    maxPrice?: true
    radiusMiles?: true
    lunchDays?: true
    updatedAt?: true
    _all?: true
  }

  export type UserPreferencesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to aggregate.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPreferences
    **/
    _count?: true | UserPreferencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPreferencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPreferencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPreferencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type GetUserPreferencesAggregateType<T extends UserPreferencesAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPreferences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPreferences[P]>
      : GetScalarType<T[P], AggregateUserPreferences[P]>
  }




  export type UserPreferencesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserPreferencesWhereInput
    orderBy?: UserPreferencesOrderByWithAggregationInput | UserPreferencesOrderByWithAggregationInput[]
    by: UserPreferencesScalarFieldEnum[] | UserPreferencesScalarFieldEnum
    having?: UserPreferencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPreferencesCountAggregateInputType | true
    _avg?: UserPreferencesAvgAggregateInputType
    _sum?: UserPreferencesSumAggregateInputType
    _min?: UserPreferencesMinAggregateInputType
    _max?: UserPreferencesMaxAggregateInputType
  }

  export type UserPreferencesGroupByOutputType = {
    userId: string
    vegetarian: boolean
    vegan: boolean
    pescatarian: boolean
    halal: boolean
    kosher: boolean
    glutenFree: boolean
    dairyFree: boolean
    nutFree: boolean
    allergies: string[]
    dislikedIngredients: string[]
    likedCuisines: string[]
    dislikedCuisines: string[]
    maxPrice: number | null
    radiusMiles: number | null
    lunchDays: number[]
    updatedAt: Date
    _count: UserPreferencesCountAggregateOutputType | null
    _avg: UserPreferencesAvgAggregateOutputType | null
    _sum: UserPreferencesSumAggregateOutputType | null
    _min: UserPreferencesMinAggregateOutputType | null
    _max: UserPreferencesMaxAggregateOutputType | null
  }

  type GetUserPreferencesGroupByPayload<T extends UserPreferencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPreferencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPreferencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
            : GetScalarType<T[P], UserPreferencesGroupByOutputType[P]>
        }
      >
    >


  export type UserPreferencesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    vegetarian?: boolean
    vegan?: boolean
    pescatarian?: boolean
    halal?: boolean
    kosher?: boolean
    glutenFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    allergies?: boolean
    dislikedIngredients?: boolean
    likedCuisines?: boolean
    dislikedCuisines?: boolean
    maxPrice?: boolean
    radiusMiles?: boolean
    lunchDays?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    vegetarian?: boolean
    vegan?: boolean
    pescatarian?: boolean
    halal?: boolean
    kosher?: boolean
    glutenFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    allergies?: boolean
    dislikedIngredients?: boolean
    likedCuisines?: boolean
    dislikedCuisines?: boolean
    maxPrice?: boolean
    radiusMiles?: boolean
    lunchDays?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    vegetarian?: boolean
    vegan?: boolean
    pescatarian?: boolean
    halal?: boolean
    kosher?: boolean
    glutenFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    allergies?: boolean
    dislikedIngredients?: boolean
    likedCuisines?: boolean
    dislikedCuisines?: boolean
    maxPrice?: boolean
    radiusMiles?: boolean
    lunchDays?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userPreferences"]>

  export type UserPreferencesSelectScalar = {
    userId?: boolean
    vegetarian?: boolean
    vegan?: boolean
    pescatarian?: boolean
    halal?: boolean
    kosher?: boolean
    glutenFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    allergies?: boolean
    dislikedIngredients?: boolean
    likedCuisines?: boolean
    dislikedCuisines?: boolean
    maxPrice?: boolean
    radiusMiles?: boolean
    lunchDays?: boolean
    updatedAt?: boolean
  }

  export type UserPreferencesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "vegetarian" | "vegan" | "pescatarian" | "halal" | "kosher" | "glutenFree" | "dairyFree" | "nutFree" | "allergies" | "dislikedIngredients" | "likedCuisines" | "dislikedCuisines" | "maxPrice" | "radiusMiles" | "lunchDays" | "updatedAt", ExtArgs["result"]["userPreferences"]>
  export type UserPreferencesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserPreferencesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserPreferencesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserPreferences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      vegetarian: boolean
      vegan: boolean
      pescatarian: boolean
      halal: boolean
      kosher: boolean
      glutenFree: boolean
      dairyFree: boolean
      nutFree: boolean
      allergies: string[]
      dislikedIngredients: string[]
      likedCuisines: string[]
      dislikedCuisines: string[]
      maxPrice: number | null
      radiusMiles: number | null
      lunchDays: number[]
      updatedAt: Date
    }, ExtArgs["result"]["userPreferences"]>
    composites: {}
  }

  type UserPreferencesGetPayload<S extends boolean | null | undefined | UserPreferencesDefaultArgs> = $Result.GetResult<Prisma.$UserPreferencesPayload, S>

  type UserPreferencesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserPreferencesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserPreferencesCountAggregateInputType | true
    }

  export interface UserPreferencesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPreferences'], meta: { name: 'UserPreferences' } }
    /**
     * Find zero or one UserPreferences that matches the filter.
     * @param {UserPreferencesFindUniqueArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserPreferencesFindUniqueArgs>(args: SelectSubset<T, UserPreferencesFindUniqueArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserPreferences that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserPreferencesFindUniqueOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserPreferencesFindUniqueOrThrowArgs>(args: SelectSubset<T, UserPreferencesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserPreferencesFindFirstArgs>(args?: SelectSubset<T, UserPreferencesFindFirstArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserPreferences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindFirstOrThrowArgs} args - Arguments to find a UserPreferences
     * @example
     * // Get one UserPreferences
     * const userPreferences = await prisma.userPreferences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserPreferencesFindFirstOrThrowArgs>(args?: SelectSubset<T, UserPreferencesFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany()
     * 
     * // Get first 10 UserPreferences
     * const userPreferences = await prisma.userPreferences.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userPreferencesWithUserIdOnly = await prisma.userPreferences.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserPreferencesFindManyArgs>(args?: SelectSubset<T, UserPreferencesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserPreferences.
     * @param {UserPreferencesCreateArgs} args - Arguments to create a UserPreferences.
     * @example
     * // Create one UserPreferences
     * const UserPreferences = await prisma.userPreferences.create({
     *   data: {
     *     // ... data to create a UserPreferences
     *   }
     * })
     * 
     */
    create<T extends UserPreferencesCreateArgs>(args: SelectSubset<T, UserPreferencesCreateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserPreferences.
     * @param {UserPreferencesCreateManyArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserPreferencesCreateManyArgs>(args?: SelectSubset<T, UserPreferencesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserPreferences and returns the data saved in the database.
     * @param {UserPreferencesCreateManyAndReturnArgs} args - Arguments to create many UserPreferences.
     * @example
     * // Create many UserPreferences
     * const userPreferences = await prisma.userPreferences.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserPreferences and only return the `userId`
     * const userPreferencesWithUserIdOnly = await prisma.userPreferences.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserPreferencesCreateManyAndReturnArgs>(args?: SelectSubset<T, UserPreferencesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserPreferences.
     * @param {UserPreferencesDeleteArgs} args - Arguments to delete one UserPreferences.
     * @example
     * // Delete one UserPreferences
     * const UserPreferences = await prisma.userPreferences.delete({
     *   where: {
     *     // ... filter to delete one UserPreferences
     *   }
     * })
     * 
     */
    delete<T extends UserPreferencesDeleteArgs>(args: SelectSubset<T, UserPreferencesDeleteArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserPreferences.
     * @param {UserPreferencesUpdateArgs} args - Arguments to update one UserPreferences.
     * @example
     * // Update one UserPreferences
     * const userPreferences = await prisma.userPreferences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserPreferencesUpdateArgs>(args: SelectSubset<T, UserPreferencesUpdateArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserPreferences.
     * @param {UserPreferencesDeleteManyArgs} args - Arguments to filter UserPreferences to delete.
     * @example
     * // Delete a few UserPreferences
     * const { count } = await prisma.userPreferences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserPreferencesDeleteManyArgs>(args?: SelectSubset<T, UserPreferencesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserPreferencesUpdateManyArgs>(args: SelectSubset<T, UserPreferencesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPreferences and returns the data updated in the database.
     * @param {UserPreferencesUpdateManyAndReturnArgs} args - Arguments to update many UserPreferences.
     * @example
     * // Update many UserPreferences
     * const userPreferences = await prisma.userPreferences.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserPreferences and only return the `userId`
     * const userPreferencesWithUserIdOnly = await prisma.userPreferences.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserPreferencesUpdateManyAndReturnArgs>(args: SelectSubset<T, UserPreferencesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserPreferences.
     * @param {UserPreferencesUpsertArgs} args - Arguments to update or create a UserPreferences.
     * @example
     * // Update or create a UserPreferences
     * const userPreferences = await prisma.userPreferences.upsert({
     *   create: {
     *     // ... data to create a UserPreferences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPreferences we want to update
     *   }
     * })
     */
    upsert<T extends UserPreferencesUpsertArgs>(args: SelectSubset<T, UserPreferencesUpsertArgs<ExtArgs>>): Prisma__UserPreferencesClient<$Result.GetResult<Prisma.$UserPreferencesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesCountArgs} args - Arguments to filter UserPreferences to count.
     * @example
     * // Count the number of UserPreferences
     * const count = await prisma.userPreferences.count({
     *   where: {
     *     // ... the filter for the UserPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserPreferencesCountArgs>(
      args?: Subset<T, UserPreferencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPreferencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserPreferencesAggregateArgs>(args: Subset<T, UserPreferencesAggregateArgs>): Prisma.PrismaPromise<GetUserPreferencesAggregateType<T>>

    /**
     * Group by UserPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPreferencesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserPreferencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPreferencesGroupByArgs['orderBy'] }
        : { orderBy?: UserPreferencesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserPreferencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPreferencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPreferences model
   */
  readonly fields: UserPreferencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPreferences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPreferencesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserPreferences model
   */
  interface UserPreferencesFieldRefs {
    readonly userId: FieldRef<"UserPreferences", 'String'>
    readonly vegetarian: FieldRef<"UserPreferences", 'Boolean'>
    readonly vegan: FieldRef<"UserPreferences", 'Boolean'>
    readonly pescatarian: FieldRef<"UserPreferences", 'Boolean'>
    readonly halal: FieldRef<"UserPreferences", 'Boolean'>
    readonly kosher: FieldRef<"UserPreferences", 'Boolean'>
    readonly glutenFree: FieldRef<"UserPreferences", 'Boolean'>
    readonly dairyFree: FieldRef<"UserPreferences", 'Boolean'>
    readonly nutFree: FieldRef<"UserPreferences", 'Boolean'>
    readonly allergies: FieldRef<"UserPreferences", 'String[]'>
    readonly dislikedIngredients: FieldRef<"UserPreferences", 'String[]'>
    readonly likedCuisines: FieldRef<"UserPreferences", 'String[]'>
    readonly dislikedCuisines: FieldRef<"UserPreferences", 'String[]'>
    readonly maxPrice: FieldRef<"UserPreferences", 'Int'>
    readonly radiusMiles: FieldRef<"UserPreferences", 'Float'>
    readonly lunchDays: FieldRef<"UserPreferences", 'Int[]'>
    readonly updatedAt: FieldRef<"UserPreferences", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserPreferences findUnique
   */
  export type UserPreferencesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findUniqueOrThrow
   */
  export type UserPreferencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences findFirst
   */
  export type UserPreferencesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findFirstOrThrow
   */
  export type UserPreferencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPreferences.
     */
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences findMany
   */
  export type UserPreferencesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter, which UserPreferences to fetch.
     */
    where?: UserPreferencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPreferences to fetch.
     */
    orderBy?: UserPreferencesOrderByWithRelationInput | UserPreferencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPreferences.
     */
    cursor?: UserPreferencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPreferences.
     */
    skip?: number
    distinct?: UserPreferencesScalarFieldEnum | UserPreferencesScalarFieldEnum[]
  }

  /**
   * UserPreferences create
   */
  export type UserPreferencesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPreferences.
     */
    data: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
  }

  /**
   * UserPreferences createMany
   */
  export type UserPreferencesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserPreferences createManyAndReturn
   */
  export type UserPreferencesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to create many UserPreferences.
     */
    data: UserPreferencesCreateManyInput | UserPreferencesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences update
   */
  export type UserPreferencesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPreferences.
     */
    data: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
    /**
     * Choose, which UserPreferences to update.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences updateMany
   */
  export type UserPreferencesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
  }

  /**
   * UserPreferences updateManyAndReturn
   */
  export type UserPreferencesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * The data used to update UserPreferences.
     */
    data: XOR<UserPreferencesUpdateManyMutationInput, UserPreferencesUncheckedUpdateManyInput>
    /**
     * Filter which UserPreferences to update
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserPreferences upsert
   */
  export type UserPreferencesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPreferences to update in case it exists.
     */
    where: UserPreferencesWhereUniqueInput
    /**
     * In case the UserPreferences found by the `where` argument doesn't exist, create a new UserPreferences with this data.
     */
    create: XOR<UserPreferencesCreateInput, UserPreferencesUncheckedCreateInput>
    /**
     * In case the UserPreferences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPreferencesUpdateInput, UserPreferencesUncheckedUpdateInput>
  }

  /**
   * UserPreferences delete
   */
  export type UserPreferencesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
    /**
     * Filter which UserPreferences to delete.
     */
    where: UserPreferencesWhereUniqueInput
  }

  /**
   * UserPreferences deleteMany
   */
  export type UserPreferencesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPreferences to delete
     */
    where?: UserPreferencesWhereInput
    /**
     * Limit how many UserPreferences to delete.
     */
    limit?: number
  }

  /**
   * UserPreferences without action
   */
  export type UserPreferencesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPreferences
     */
    select?: UserPreferencesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserPreferences
     */
    omit?: UserPreferencesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserPreferencesInclude<ExtArgs> | null
  }


  /**
   * Model MealEvent
   */

  export type AggregateMealEvent = {
    _count: MealEventCountAggregateOutputType | null
    _avg: MealEventAvgAggregateOutputType | null
    _sum: MealEventSumAggregateOutputType | null
    _min: MealEventMinAggregateOutputType | null
    _max: MealEventMaxAggregateOutputType | null
  }

  export type MealEventAvgAggregateOutputType = {
    rating: number | null
    costCents: number | null
  }

  export type MealEventSumAggregateOutputType = {
    rating: number | null
    costCents: number | null
  }

  export type MealEventMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    date: Date | null
    name: string | null
    source: $Enums.LunchSource | null
    placeId: string | null
    notes: string | null
    rating: number | null
    costCents: number | null
  }

  export type MealEventMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    date: Date | null
    name: string | null
    source: $Enums.LunchSource | null
    placeId: string | null
    notes: string | null
    rating: number | null
    costCents: number | null
  }

  export type MealEventCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    date: number
    name: number
    source: number
    placeId: number
    notes: number
    rating: number
    costCents: number
    _all: number
  }


  export type MealEventAvgAggregateInputType = {
    rating?: true
    costCents?: true
  }

  export type MealEventSumAggregateInputType = {
    rating?: true
    costCents?: true
  }

  export type MealEventMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    date?: true
    name?: true
    source?: true
    placeId?: true
    notes?: true
    rating?: true
    costCents?: true
  }

  export type MealEventMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    date?: true
    name?: true
    source?: true
    placeId?: true
    notes?: true
    rating?: true
    costCents?: true
  }

  export type MealEventCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    date?: true
    name?: true
    source?: true
    placeId?: true
    notes?: true
    rating?: true
    costCents?: true
    _all?: true
  }

  export type MealEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealEvent to aggregate.
     */
    where?: MealEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEvents to fetch.
     */
    orderBy?: MealEventOrderByWithRelationInput | MealEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealEvents
    **/
    _count?: true | MealEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MealEventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MealEventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealEventMaxAggregateInputType
  }

  export type GetMealEventAggregateType<T extends MealEventAggregateArgs> = {
        [P in keyof T & keyof AggregateMealEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealEvent[P]>
      : GetScalarType<T[P], AggregateMealEvent[P]>
  }




  export type MealEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealEventWhereInput
    orderBy?: MealEventOrderByWithAggregationInput | MealEventOrderByWithAggregationInput[]
    by: MealEventScalarFieldEnum[] | MealEventScalarFieldEnum
    having?: MealEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealEventCountAggregateInputType | true
    _avg?: MealEventAvgAggregateInputType
    _sum?: MealEventSumAggregateInputType
    _min?: MealEventMinAggregateInputType
    _max?: MealEventMaxAggregateInputType
  }

  export type MealEventGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    date: Date
    name: string
    source: $Enums.LunchSource
    placeId: string | null
    notes: string | null
    rating: number | null
    costCents: number | null
    _count: MealEventCountAggregateOutputType | null
    _avg: MealEventAvgAggregateOutputType | null
    _sum: MealEventSumAggregateOutputType | null
    _min: MealEventMinAggregateOutputType | null
    _max: MealEventMaxAggregateOutputType | null
  }

  type GetMealEventGroupByPayload<T extends MealEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealEventGroupByOutputType[P]>
            : GetScalarType<T[P], MealEventGroupByOutputType[P]>
        }
      >
    >


  export type MealEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    date?: boolean
    name?: boolean
    source?: boolean
    placeId?: boolean
    notes?: boolean
    rating?: boolean
    costCents?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealEvent"]>

  export type MealEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    date?: boolean
    name?: boolean
    source?: boolean
    placeId?: boolean
    notes?: boolean
    rating?: boolean
    costCents?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealEvent"]>

  export type MealEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    date?: boolean
    name?: boolean
    source?: boolean
    placeId?: boolean
    notes?: boolean
    rating?: boolean
    costCents?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealEvent"]>

  export type MealEventSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    date?: boolean
    name?: boolean
    source?: boolean
    placeId?: boolean
    notes?: boolean
    rating?: boolean
    costCents?: boolean
  }

  export type MealEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "date" | "name" | "source" | "placeId" | "notes" | "rating" | "costCents", ExtArgs["result"]["mealEvent"]>
  export type MealEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MealEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      date: Date
      name: string
      source: $Enums.LunchSource
      placeId: string | null
      notes: string | null
      rating: number | null
      costCents: number | null
    }, ExtArgs["result"]["mealEvent"]>
    composites: {}
  }

  type MealEventGetPayload<S extends boolean | null | undefined | MealEventDefaultArgs> = $Result.GetResult<Prisma.$MealEventPayload, S>

  type MealEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealEventCountAggregateInputType | true
    }

  export interface MealEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealEvent'], meta: { name: 'MealEvent' } }
    /**
     * Find zero or one MealEvent that matches the filter.
     * @param {MealEventFindUniqueArgs} args - Arguments to find a MealEvent
     * @example
     * // Get one MealEvent
     * const mealEvent = await prisma.mealEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealEventFindUniqueArgs>(args: SelectSubset<T, MealEventFindUniqueArgs<ExtArgs>>): Prisma__MealEventClient<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealEventFindUniqueOrThrowArgs} args - Arguments to find a MealEvent
     * @example
     * // Get one MealEvent
     * const mealEvent = await prisma.mealEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealEventFindUniqueOrThrowArgs>(args: SelectSubset<T, MealEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealEventClient<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEventFindFirstArgs} args - Arguments to find a MealEvent
     * @example
     * // Get one MealEvent
     * const mealEvent = await prisma.mealEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealEventFindFirstArgs>(args?: SelectSubset<T, MealEventFindFirstArgs<ExtArgs>>): Prisma__MealEventClient<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEventFindFirstOrThrowArgs} args - Arguments to find a MealEvent
     * @example
     * // Get one MealEvent
     * const mealEvent = await prisma.mealEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealEventFindFirstOrThrowArgs>(args?: SelectSubset<T, MealEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealEventClient<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealEvents
     * const mealEvents = await prisma.mealEvent.findMany()
     * 
     * // Get first 10 MealEvents
     * const mealEvents = await prisma.mealEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealEventWithIdOnly = await prisma.mealEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealEventFindManyArgs>(args?: SelectSubset<T, MealEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealEvent.
     * @param {MealEventCreateArgs} args - Arguments to create a MealEvent.
     * @example
     * // Create one MealEvent
     * const MealEvent = await prisma.mealEvent.create({
     *   data: {
     *     // ... data to create a MealEvent
     *   }
     * })
     * 
     */
    create<T extends MealEventCreateArgs>(args: SelectSubset<T, MealEventCreateArgs<ExtArgs>>): Prisma__MealEventClient<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealEvents.
     * @param {MealEventCreateManyArgs} args - Arguments to create many MealEvents.
     * @example
     * // Create many MealEvents
     * const mealEvent = await prisma.mealEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealEventCreateManyArgs>(args?: SelectSubset<T, MealEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealEvents and returns the data saved in the database.
     * @param {MealEventCreateManyAndReturnArgs} args - Arguments to create many MealEvents.
     * @example
     * // Create many MealEvents
     * const mealEvent = await prisma.mealEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealEvents and only return the `id`
     * const mealEventWithIdOnly = await prisma.mealEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealEventCreateManyAndReturnArgs>(args?: SelectSubset<T, MealEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealEvent.
     * @param {MealEventDeleteArgs} args - Arguments to delete one MealEvent.
     * @example
     * // Delete one MealEvent
     * const MealEvent = await prisma.mealEvent.delete({
     *   where: {
     *     // ... filter to delete one MealEvent
     *   }
     * })
     * 
     */
    delete<T extends MealEventDeleteArgs>(args: SelectSubset<T, MealEventDeleteArgs<ExtArgs>>): Prisma__MealEventClient<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealEvent.
     * @param {MealEventUpdateArgs} args - Arguments to update one MealEvent.
     * @example
     * // Update one MealEvent
     * const mealEvent = await prisma.mealEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealEventUpdateArgs>(args: SelectSubset<T, MealEventUpdateArgs<ExtArgs>>): Prisma__MealEventClient<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealEvents.
     * @param {MealEventDeleteManyArgs} args - Arguments to filter MealEvents to delete.
     * @example
     * // Delete a few MealEvents
     * const { count } = await prisma.mealEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealEventDeleteManyArgs>(args?: SelectSubset<T, MealEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealEvents
     * const mealEvent = await prisma.mealEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealEventUpdateManyArgs>(args: SelectSubset<T, MealEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealEvents and returns the data updated in the database.
     * @param {MealEventUpdateManyAndReturnArgs} args - Arguments to update many MealEvents.
     * @example
     * // Update many MealEvents
     * const mealEvent = await prisma.mealEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealEvents and only return the `id`
     * const mealEventWithIdOnly = await prisma.mealEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealEventUpdateManyAndReturnArgs>(args: SelectSubset<T, MealEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealEvent.
     * @param {MealEventUpsertArgs} args - Arguments to update or create a MealEvent.
     * @example
     * // Update or create a MealEvent
     * const mealEvent = await prisma.mealEvent.upsert({
     *   create: {
     *     // ... data to create a MealEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealEvent we want to update
     *   }
     * })
     */
    upsert<T extends MealEventUpsertArgs>(args: SelectSubset<T, MealEventUpsertArgs<ExtArgs>>): Prisma__MealEventClient<$Result.GetResult<Prisma.$MealEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEventCountArgs} args - Arguments to filter MealEvents to count.
     * @example
     * // Count the number of MealEvents
     * const count = await prisma.mealEvent.count({
     *   where: {
     *     // ... the filter for the MealEvents we want to count
     *   }
     * })
    **/
    count<T extends MealEventCountArgs>(
      args?: Subset<T, MealEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealEventAggregateArgs>(args: Subset<T, MealEventAggregateArgs>): Prisma.PrismaPromise<GetMealEventAggregateType<T>>

    /**
     * Group by MealEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealEventGroupByArgs['orderBy'] }
        : { orderBy?: MealEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealEvent model
   */
  readonly fields: MealEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealEvent model
   */
  interface MealEventFieldRefs {
    readonly id: FieldRef<"MealEvent", 'String'>
    readonly createdAt: FieldRef<"MealEvent", 'DateTime'>
    readonly userId: FieldRef<"MealEvent", 'String'>
    readonly date: FieldRef<"MealEvent", 'DateTime'>
    readonly name: FieldRef<"MealEvent", 'String'>
    readonly source: FieldRef<"MealEvent", 'LunchSource'>
    readonly placeId: FieldRef<"MealEvent", 'String'>
    readonly notes: FieldRef<"MealEvent", 'String'>
    readonly rating: FieldRef<"MealEvent", 'Int'>
    readonly costCents: FieldRef<"MealEvent", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MealEvent findUnique
   */
  export type MealEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventInclude<ExtArgs> | null
    /**
     * Filter, which MealEvent to fetch.
     */
    where: MealEventWhereUniqueInput
  }

  /**
   * MealEvent findUniqueOrThrow
   */
  export type MealEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventInclude<ExtArgs> | null
    /**
     * Filter, which MealEvent to fetch.
     */
    where: MealEventWhereUniqueInput
  }

  /**
   * MealEvent findFirst
   */
  export type MealEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventInclude<ExtArgs> | null
    /**
     * Filter, which MealEvent to fetch.
     */
    where?: MealEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEvents to fetch.
     */
    orderBy?: MealEventOrderByWithRelationInput | MealEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealEvents.
     */
    cursor?: MealEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealEvents.
     */
    distinct?: MealEventScalarFieldEnum | MealEventScalarFieldEnum[]
  }

  /**
   * MealEvent findFirstOrThrow
   */
  export type MealEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventInclude<ExtArgs> | null
    /**
     * Filter, which MealEvent to fetch.
     */
    where?: MealEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEvents to fetch.
     */
    orderBy?: MealEventOrderByWithRelationInput | MealEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealEvents.
     */
    cursor?: MealEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealEvents.
     */
    distinct?: MealEventScalarFieldEnum | MealEventScalarFieldEnum[]
  }

  /**
   * MealEvent findMany
   */
  export type MealEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventInclude<ExtArgs> | null
    /**
     * Filter, which MealEvents to fetch.
     */
    where?: MealEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealEvents to fetch.
     */
    orderBy?: MealEventOrderByWithRelationInput | MealEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealEvents.
     */
    cursor?: MealEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealEvents.
     */
    skip?: number
    distinct?: MealEventScalarFieldEnum | MealEventScalarFieldEnum[]
  }

  /**
   * MealEvent create
   */
  export type MealEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventInclude<ExtArgs> | null
    /**
     * The data needed to create a MealEvent.
     */
    data: XOR<MealEventCreateInput, MealEventUncheckedCreateInput>
  }

  /**
   * MealEvent createMany
   */
  export type MealEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealEvents.
     */
    data: MealEventCreateManyInput | MealEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealEvent createManyAndReturn
   */
  export type MealEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * The data used to create many MealEvents.
     */
    data: MealEventCreateManyInput | MealEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealEvent update
   */
  export type MealEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventInclude<ExtArgs> | null
    /**
     * The data needed to update a MealEvent.
     */
    data: XOR<MealEventUpdateInput, MealEventUncheckedUpdateInput>
    /**
     * Choose, which MealEvent to update.
     */
    where: MealEventWhereUniqueInput
  }

  /**
   * MealEvent updateMany
   */
  export type MealEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealEvents.
     */
    data: XOR<MealEventUpdateManyMutationInput, MealEventUncheckedUpdateManyInput>
    /**
     * Filter which MealEvents to update
     */
    where?: MealEventWhereInput
    /**
     * Limit how many MealEvents to update.
     */
    limit?: number
  }

  /**
   * MealEvent updateManyAndReturn
   */
  export type MealEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * The data used to update MealEvents.
     */
    data: XOR<MealEventUpdateManyMutationInput, MealEventUncheckedUpdateManyInput>
    /**
     * Filter which MealEvents to update
     */
    where?: MealEventWhereInput
    /**
     * Limit how many MealEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealEvent upsert
   */
  export type MealEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventInclude<ExtArgs> | null
    /**
     * The filter to search for the MealEvent to update in case it exists.
     */
    where: MealEventWhereUniqueInput
    /**
     * In case the MealEvent found by the `where` argument doesn't exist, create a new MealEvent with this data.
     */
    create: XOR<MealEventCreateInput, MealEventUncheckedCreateInput>
    /**
     * In case the MealEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealEventUpdateInput, MealEventUncheckedUpdateInput>
  }

  /**
   * MealEvent delete
   */
  export type MealEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventInclude<ExtArgs> | null
    /**
     * Filter which MealEvent to delete.
     */
    where: MealEventWhereUniqueInput
  }

  /**
   * MealEvent deleteMany
   */
  export type MealEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealEvents to delete
     */
    where?: MealEventWhereInput
    /**
     * Limit how many MealEvents to delete.
     */
    limit?: number
  }

  /**
   * MealEvent without action
   */
  export type MealEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealEvent
     */
    select?: MealEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealEvent
     */
    omit?: MealEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealEventInclude<ExtArgs> | null
  }


  /**
   * Model SwipeEvent
   */

  export type AggregateSwipeEvent = {
    _count: SwipeEventCountAggregateOutputType | null
    _min: SwipeEventMinAggregateOutputType | null
    _max: SwipeEventMaxAggregateOutputType | null
  }

  export type SwipeEventMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    date: Date | null
    suggestion: string | null
    decision: $Enums.SwipeDecision | null
    reason: string | null
  }

  export type SwipeEventMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    userId: string | null
    date: Date | null
    suggestion: string | null
    decision: $Enums.SwipeDecision | null
    reason: string | null
  }

  export type SwipeEventCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    date: number
    suggestion: number
    decision: number
    reason: number
    _all: number
  }


  export type SwipeEventMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    date?: true
    suggestion?: true
    decision?: true
    reason?: true
  }

  export type SwipeEventMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    date?: true
    suggestion?: true
    decision?: true
    reason?: true
  }

  export type SwipeEventCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    date?: true
    suggestion?: true
    decision?: true
    reason?: true
    _all?: true
  }

  export type SwipeEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwipeEvent to aggregate.
     */
    where?: SwipeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwipeEvents to fetch.
     */
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SwipeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwipeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwipeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SwipeEvents
    **/
    _count?: true | SwipeEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SwipeEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SwipeEventMaxAggregateInputType
  }

  export type GetSwipeEventAggregateType<T extends SwipeEventAggregateArgs> = {
        [P in keyof T & keyof AggregateSwipeEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSwipeEvent[P]>
      : GetScalarType<T[P], AggregateSwipeEvent[P]>
  }




  export type SwipeEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SwipeEventWhereInput
    orderBy?: SwipeEventOrderByWithAggregationInput | SwipeEventOrderByWithAggregationInput[]
    by: SwipeEventScalarFieldEnum[] | SwipeEventScalarFieldEnum
    having?: SwipeEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SwipeEventCountAggregateInputType | true
    _min?: SwipeEventMinAggregateInputType
    _max?: SwipeEventMaxAggregateInputType
  }

  export type SwipeEventGroupByOutputType = {
    id: string
    createdAt: Date
    userId: string
    date: Date
    suggestion: string
    decision: $Enums.SwipeDecision
    reason: string | null
    _count: SwipeEventCountAggregateOutputType | null
    _min: SwipeEventMinAggregateOutputType | null
    _max: SwipeEventMaxAggregateOutputType | null
  }

  type GetSwipeEventGroupByPayload<T extends SwipeEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SwipeEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SwipeEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SwipeEventGroupByOutputType[P]>
            : GetScalarType<T[P], SwipeEventGroupByOutputType[P]>
        }
      >
    >


  export type SwipeEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    date?: boolean
    suggestion?: boolean
    decision?: boolean
    reason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipeEvent"]>

  export type SwipeEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    date?: boolean
    suggestion?: boolean
    decision?: boolean
    reason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipeEvent"]>

  export type SwipeEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    date?: boolean
    suggestion?: boolean
    decision?: boolean
    reason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["swipeEvent"]>

  export type SwipeEventSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    date?: boolean
    suggestion?: boolean
    decision?: boolean
    reason?: boolean
  }

  export type SwipeEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "date" | "suggestion" | "decision" | "reason", ExtArgs["result"]["swipeEvent"]>
  export type SwipeEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SwipeEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SwipeEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SwipeEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SwipeEvent"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      userId: string
      date: Date
      suggestion: string
      decision: $Enums.SwipeDecision
      reason: string | null
    }, ExtArgs["result"]["swipeEvent"]>
    composites: {}
  }

  type SwipeEventGetPayload<S extends boolean | null | undefined | SwipeEventDefaultArgs> = $Result.GetResult<Prisma.$SwipeEventPayload, S>

  type SwipeEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SwipeEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SwipeEventCountAggregateInputType | true
    }

  export interface SwipeEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SwipeEvent'], meta: { name: 'SwipeEvent' } }
    /**
     * Find zero or one SwipeEvent that matches the filter.
     * @param {SwipeEventFindUniqueArgs} args - Arguments to find a SwipeEvent
     * @example
     * // Get one SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SwipeEventFindUniqueArgs>(args: SelectSubset<T, SwipeEventFindUniqueArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SwipeEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SwipeEventFindUniqueOrThrowArgs} args - Arguments to find a SwipeEvent
     * @example
     * // Get one SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SwipeEventFindUniqueOrThrowArgs>(args: SelectSubset<T, SwipeEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwipeEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventFindFirstArgs} args - Arguments to find a SwipeEvent
     * @example
     * // Get one SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SwipeEventFindFirstArgs>(args?: SelectSubset<T, SwipeEventFindFirstArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SwipeEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventFindFirstOrThrowArgs} args - Arguments to find a SwipeEvent
     * @example
     * // Get one SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SwipeEventFindFirstOrThrowArgs>(args?: SelectSubset<T, SwipeEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SwipeEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SwipeEvents
     * const swipeEvents = await prisma.swipeEvent.findMany()
     * 
     * // Get first 10 SwipeEvents
     * const swipeEvents = await prisma.swipeEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const swipeEventWithIdOnly = await prisma.swipeEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SwipeEventFindManyArgs>(args?: SelectSubset<T, SwipeEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SwipeEvent.
     * @param {SwipeEventCreateArgs} args - Arguments to create a SwipeEvent.
     * @example
     * // Create one SwipeEvent
     * const SwipeEvent = await prisma.swipeEvent.create({
     *   data: {
     *     // ... data to create a SwipeEvent
     *   }
     * })
     * 
     */
    create<T extends SwipeEventCreateArgs>(args: SelectSubset<T, SwipeEventCreateArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SwipeEvents.
     * @param {SwipeEventCreateManyArgs} args - Arguments to create many SwipeEvents.
     * @example
     * // Create many SwipeEvents
     * const swipeEvent = await prisma.swipeEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SwipeEventCreateManyArgs>(args?: SelectSubset<T, SwipeEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SwipeEvents and returns the data saved in the database.
     * @param {SwipeEventCreateManyAndReturnArgs} args - Arguments to create many SwipeEvents.
     * @example
     * // Create many SwipeEvents
     * const swipeEvent = await prisma.swipeEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SwipeEvents and only return the `id`
     * const swipeEventWithIdOnly = await prisma.swipeEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SwipeEventCreateManyAndReturnArgs>(args?: SelectSubset<T, SwipeEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SwipeEvent.
     * @param {SwipeEventDeleteArgs} args - Arguments to delete one SwipeEvent.
     * @example
     * // Delete one SwipeEvent
     * const SwipeEvent = await prisma.swipeEvent.delete({
     *   where: {
     *     // ... filter to delete one SwipeEvent
     *   }
     * })
     * 
     */
    delete<T extends SwipeEventDeleteArgs>(args: SelectSubset<T, SwipeEventDeleteArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SwipeEvent.
     * @param {SwipeEventUpdateArgs} args - Arguments to update one SwipeEvent.
     * @example
     * // Update one SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SwipeEventUpdateArgs>(args: SelectSubset<T, SwipeEventUpdateArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SwipeEvents.
     * @param {SwipeEventDeleteManyArgs} args - Arguments to filter SwipeEvents to delete.
     * @example
     * // Delete a few SwipeEvents
     * const { count } = await prisma.swipeEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SwipeEventDeleteManyArgs>(args?: SelectSubset<T, SwipeEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SwipeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SwipeEvents
     * const swipeEvent = await prisma.swipeEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SwipeEventUpdateManyArgs>(args: SelectSubset<T, SwipeEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SwipeEvents and returns the data updated in the database.
     * @param {SwipeEventUpdateManyAndReturnArgs} args - Arguments to update many SwipeEvents.
     * @example
     * // Update many SwipeEvents
     * const swipeEvent = await prisma.swipeEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SwipeEvents and only return the `id`
     * const swipeEventWithIdOnly = await prisma.swipeEvent.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SwipeEventUpdateManyAndReturnArgs>(args: SelectSubset<T, SwipeEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SwipeEvent.
     * @param {SwipeEventUpsertArgs} args - Arguments to update or create a SwipeEvent.
     * @example
     * // Update or create a SwipeEvent
     * const swipeEvent = await prisma.swipeEvent.upsert({
     *   create: {
     *     // ... data to create a SwipeEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SwipeEvent we want to update
     *   }
     * })
     */
    upsert<T extends SwipeEventUpsertArgs>(args: SelectSubset<T, SwipeEventUpsertArgs<ExtArgs>>): Prisma__SwipeEventClient<$Result.GetResult<Prisma.$SwipeEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SwipeEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventCountArgs} args - Arguments to filter SwipeEvents to count.
     * @example
     * // Count the number of SwipeEvents
     * const count = await prisma.swipeEvent.count({
     *   where: {
     *     // ... the filter for the SwipeEvents we want to count
     *   }
     * })
    **/
    count<T extends SwipeEventCountArgs>(
      args?: Subset<T, SwipeEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SwipeEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SwipeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SwipeEventAggregateArgs>(args: Subset<T, SwipeEventAggregateArgs>): Prisma.PrismaPromise<GetSwipeEventAggregateType<T>>

    /**
     * Group by SwipeEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SwipeEventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SwipeEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SwipeEventGroupByArgs['orderBy'] }
        : { orderBy?: SwipeEventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SwipeEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSwipeEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SwipeEvent model
   */
  readonly fields: SwipeEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SwipeEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SwipeEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SwipeEvent model
   */
  interface SwipeEventFieldRefs {
    readonly id: FieldRef<"SwipeEvent", 'String'>
    readonly createdAt: FieldRef<"SwipeEvent", 'DateTime'>
    readonly userId: FieldRef<"SwipeEvent", 'String'>
    readonly date: FieldRef<"SwipeEvent", 'DateTime'>
    readonly suggestion: FieldRef<"SwipeEvent", 'String'>
    readonly decision: FieldRef<"SwipeEvent", 'SwipeDecision'>
    readonly reason: FieldRef<"SwipeEvent", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SwipeEvent findUnique
   */
  export type SwipeEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter, which SwipeEvent to fetch.
     */
    where: SwipeEventWhereUniqueInput
  }

  /**
   * SwipeEvent findUniqueOrThrow
   */
  export type SwipeEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter, which SwipeEvent to fetch.
     */
    where: SwipeEventWhereUniqueInput
  }

  /**
   * SwipeEvent findFirst
   */
  export type SwipeEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter, which SwipeEvent to fetch.
     */
    where?: SwipeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwipeEvents to fetch.
     */
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwipeEvents.
     */
    cursor?: SwipeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwipeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwipeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwipeEvents.
     */
    distinct?: SwipeEventScalarFieldEnum | SwipeEventScalarFieldEnum[]
  }

  /**
   * SwipeEvent findFirstOrThrow
   */
  export type SwipeEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter, which SwipeEvent to fetch.
     */
    where?: SwipeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwipeEvents to fetch.
     */
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SwipeEvents.
     */
    cursor?: SwipeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwipeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwipeEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SwipeEvents.
     */
    distinct?: SwipeEventScalarFieldEnum | SwipeEventScalarFieldEnum[]
  }

  /**
   * SwipeEvent findMany
   */
  export type SwipeEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter, which SwipeEvents to fetch.
     */
    where?: SwipeEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SwipeEvents to fetch.
     */
    orderBy?: SwipeEventOrderByWithRelationInput | SwipeEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SwipeEvents.
     */
    cursor?: SwipeEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SwipeEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SwipeEvents.
     */
    skip?: number
    distinct?: SwipeEventScalarFieldEnum | SwipeEventScalarFieldEnum[]
  }

  /**
   * SwipeEvent create
   */
  export type SwipeEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * The data needed to create a SwipeEvent.
     */
    data: XOR<SwipeEventCreateInput, SwipeEventUncheckedCreateInput>
  }

  /**
   * SwipeEvent createMany
   */
  export type SwipeEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SwipeEvents.
     */
    data: SwipeEventCreateManyInput | SwipeEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SwipeEvent createManyAndReturn
   */
  export type SwipeEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * The data used to create many SwipeEvents.
     */
    data: SwipeEventCreateManyInput | SwipeEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SwipeEvent update
   */
  export type SwipeEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * The data needed to update a SwipeEvent.
     */
    data: XOR<SwipeEventUpdateInput, SwipeEventUncheckedUpdateInput>
    /**
     * Choose, which SwipeEvent to update.
     */
    where: SwipeEventWhereUniqueInput
  }

  /**
   * SwipeEvent updateMany
   */
  export type SwipeEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SwipeEvents.
     */
    data: XOR<SwipeEventUpdateManyMutationInput, SwipeEventUncheckedUpdateManyInput>
    /**
     * Filter which SwipeEvents to update
     */
    where?: SwipeEventWhereInput
    /**
     * Limit how many SwipeEvents to update.
     */
    limit?: number
  }

  /**
   * SwipeEvent updateManyAndReturn
   */
  export type SwipeEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * The data used to update SwipeEvents.
     */
    data: XOR<SwipeEventUpdateManyMutationInput, SwipeEventUncheckedUpdateManyInput>
    /**
     * Filter which SwipeEvents to update
     */
    where?: SwipeEventWhereInput
    /**
     * Limit how many SwipeEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SwipeEvent upsert
   */
  export type SwipeEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * The filter to search for the SwipeEvent to update in case it exists.
     */
    where: SwipeEventWhereUniqueInput
    /**
     * In case the SwipeEvent found by the `where` argument doesn't exist, create a new SwipeEvent with this data.
     */
    create: XOR<SwipeEventCreateInput, SwipeEventUncheckedCreateInput>
    /**
     * In case the SwipeEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SwipeEventUpdateInput, SwipeEventUncheckedUpdateInput>
  }

  /**
   * SwipeEvent delete
   */
  export type SwipeEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
    /**
     * Filter which SwipeEvent to delete.
     */
    where: SwipeEventWhereUniqueInput
  }

  /**
   * SwipeEvent deleteMany
   */
  export type SwipeEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SwipeEvents to delete
     */
    where?: SwipeEventWhereInput
    /**
     * Limit how many SwipeEvents to delete.
     */
    limit?: number
  }

  /**
   * SwipeEvent without action
   */
  export type SwipeEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SwipeEvent
     */
    select?: SwipeEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SwipeEvent
     */
    omit?: SwipeEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SwipeEventInclude<ExtArgs> | null
  }


  /**
   * Model MealPlan
   */

  export type AggregateMealPlan = {
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  export type MealPlanMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    weekStart: Date | null
    source: $Enums.PlanSource | null
  }

  export type MealPlanMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    weekStart: Date | null
    source: $Enums.PlanSource | null
  }

  export type MealPlanCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    weekStart: number
    source: number
    _all: number
  }


  export type MealPlanMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    weekStart?: true
    source?: true
  }

  export type MealPlanMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    weekStart?: true
    source?: true
  }

  export type MealPlanCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    weekStart?: true
    source?: true
    _all?: true
  }

  export type MealPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlan to aggregate.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealPlans
    **/
    _count?: true | MealPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealPlanMaxAggregateInputType
  }

  export type GetMealPlanAggregateType<T extends MealPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateMealPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealPlan[P]>
      : GetScalarType<T[P], AggregateMealPlan[P]>
  }




  export type MealPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanWhereInput
    orderBy?: MealPlanOrderByWithAggregationInput | MealPlanOrderByWithAggregationInput[]
    by: MealPlanScalarFieldEnum[] | MealPlanScalarFieldEnum
    having?: MealPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealPlanCountAggregateInputType | true
    _min?: MealPlanMinAggregateInputType
    _max?: MealPlanMaxAggregateInputType
  }

  export type MealPlanGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    weekStart: Date
    source: $Enums.PlanSource
    _count: MealPlanCountAggregateOutputType | null
    _min: MealPlanMinAggregateOutputType | null
    _max: MealPlanMaxAggregateOutputType | null
  }

  type GetMealPlanGroupByPayload<T extends MealPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
            : GetScalarType<T[P], MealPlanGroupByOutputType[P]>
        }
      >
    >


  export type MealPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    weekStart?: boolean
    source?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | MealPlan$itemsArgs<ExtArgs>
    _count?: boolean | MealPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    weekStart?: boolean
    source?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    weekStart?: boolean
    source?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlan"]>

  export type MealPlanSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    weekStart?: boolean
    source?: boolean
  }

  export type MealPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "weekStart" | "source", ExtArgs["result"]["mealPlan"]>
  export type MealPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | MealPlan$itemsArgs<ExtArgs>
    _count?: boolean | MealPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MealPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MealPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MealPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealPlan"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$MealPlanItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      weekStart: Date
      source: $Enums.PlanSource
    }, ExtArgs["result"]["mealPlan"]>
    composites: {}
  }

  type MealPlanGetPayload<S extends boolean | null | undefined | MealPlanDefaultArgs> = $Result.GetResult<Prisma.$MealPlanPayload, S>

  type MealPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealPlanCountAggregateInputType | true
    }

  export interface MealPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealPlan'], meta: { name: 'MealPlan' } }
    /**
     * Find zero or one MealPlan that matches the filter.
     * @param {MealPlanFindUniqueArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealPlanFindUniqueArgs>(args: SelectSubset<T, MealPlanFindUniqueArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealPlanFindUniqueOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, MealPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealPlanFindFirstArgs>(args?: SelectSubset<T, MealPlanFindFirstArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindFirstOrThrowArgs} args - Arguments to find a MealPlan
     * @example
     * // Get one MealPlan
     * const mealPlan = await prisma.mealPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, MealPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealPlans
     * const mealPlans = await prisma.mealPlan.findMany()
     * 
     * // Get first 10 MealPlans
     * const mealPlans = await prisma.mealPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealPlanFindManyArgs>(args?: SelectSubset<T, MealPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealPlan.
     * @param {MealPlanCreateArgs} args - Arguments to create a MealPlan.
     * @example
     * // Create one MealPlan
     * const MealPlan = await prisma.mealPlan.create({
     *   data: {
     *     // ... data to create a MealPlan
     *   }
     * })
     * 
     */
    create<T extends MealPlanCreateArgs>(args: SelectSubset<T, MealPlanCreateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealPlans.
     * @param {MealPlanCreateManyArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealPlanCreateManyArgs>(args?: SelectSubset<T, MealPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealPlans and returns the data saved in the database.
     * @param {MealPlanCreateManyAndReturnArgs} args - Arguments to create many MealPlans.
     * @example
     * // Create many MealPlans
     * const mealPlan = await prisma.mealPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, MealPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealPlan.
     * @param {MealPlanDeleteArgs} args - Arguments to delete one MealPlan.
     * @example
     * // Delete one MealPlan
     * const MealPlan = await prisma.mealPlan.delete({
     *   where: {
     *     // ... filter to delete one MealPlan
     *   }
     * })
     * 
     */
    delete<T extends MealPlanDeleteArgs>(args: SelectSubset<T, MealPlanDeleteArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealPlan.
     * @param {MealPlanUpdateArgs} args - Arguments to update one MealPlan.
     * @example
     * // Update one MealPlan
     * const mealPlan = await prisma.mealPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealPlanUpdateArgs>(args: SelectSubset<T, MealPlanUpdateArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealPlans.
     * @param {MealPlanDeleteManyArgs} args - Arguments to filter MealPlans to delete.
     * @example
     * // Delete a few MealPlans
     * const { count } = await prisma.mealPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealPlanDeleteManyArgs>(args?: SelectSubset<T, MealPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealPlanUpdateManyArgs>(args: SelectSubset<T, MealPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlans and returns the data updated in the database.
     * @param {MealPlanUpdateManyAndReturnArgs} args - Arguments to update many MealPlans.
     * @example
     * // Update many MealPlans
     * const mealPlan = await prisma.mealPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealPlans and only return the `id`
     * const mealPlanWithIdOnly = await prisma.mealPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, MealPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealPlan.
     * @param {MealPlanUpsertArgs} args - Arguments to update or create a MealPlan.
     * @example
     * // Update or create a MealPlan
     * const mealPlan = await prisma.mealPlan.upsert({
     *   create: {
     *     // ... data to create a MealPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealPlan we want to update
     *   }
     * })
     */
    upsert<T extends MealPlanUpsertArgs>(args: SelectSubset<T, MealPlanUpsertArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanCountArgs} args - Arguments to filter MealPlans to count.
     * @example
     * // Count the number of MealPlans
     * const count = await prisma.mealPlan.count({
     *   where: {
     *     // ... the filter for the MealPlans we want to count
     *   }
     * })
    **/
    count<T extends MealPlanCountArgs>(
      args?: Subset<T, MealPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealPlanAggregateArgs>(args: Subset<T, MealPlanAggregateArgs>): Prisma.PrismaPromise<GetMealPlanAggregateType<T>>

    /**
     * Group by MealPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealPlanGroupByArgs['orderBy'] }
        : { orderBy?: MealPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealPlan model
   */
  readonly fields: MealPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends MealPlan$itemsArgs<ExtArgs> = {}>(args?: Subset<T, MealPlan$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealPlan model
   */
  interface MealPlanFieldRefs {
    readonly id: FieldRef<"MealPlan", 'String'>
    readonly createdAt: FieldRef<"MealPlan", 'DateTime'>
    readonly updatedAt: FieldRef<"MealPlan", 'DateTime'>
    readonly userId: FieldRef<"MealPlan", 'String'>
    readonly weekStart: FieldRef<"MealPlan", 'DateTime'>
    readonly source: FieldRef<"MealPlan", 'PlanSource'>
  }
    

  // Custom InputTypes
  /**
   * MealPlan findUnique
   */
  export type MealPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findUniqueOrThrow
   */
  export type MealPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan findFirst
   */
  export type MealPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findFirstOrThrow
   */
  export type MealPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlan to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlans.
     */
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan findMany
   */
  export type MealPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter, which MealPlans to fetch.
     */
    where?: MealPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlans to fetch.
     */
    orderBy?: MealPlanOrderByWithRelationInput | MealPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealPlans.
     */
    cursor?: MealPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlans.
     */
    skip?: number
    distinct?: MealPlanScalarFieldEnum | MealPlanScalarFieldEnum[]
  }

  /**
   * MealPlan create
   */
  export type MealPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a MealPlan.
     */
    data: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
  }

  /**
   * MealPlan createMany
   */
  export type MealPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealPlan createManyAndReturn
   */
  export type MealPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to create many MealPlans.
     */
    data: MealPlanCreateManyInput | MealPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlan update
   */
  export type MealPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a MealPlan.
     */
    data: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
    /**
     * Choose, which MealPlan to update.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan updateMany
   */
  export type MealPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
  }

  /**
   * MealPlan updateManyAndReturn
   */
  export type MealPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * The data used to update MealPlans.
     */
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyInput>
    /**
     * Filter which MealPlans to update
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlan upsert
   */
  export type MealPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the MealPlan to update in case it exists.
     */
    where: MealPlanWhereUniqueInput
    /**
     * In case the MealPlan found by the `where` argument doesn't exist, create a new MealPlan with this data.
     */
    create: XOR<MealPlanCreateInput, MealPlanUncheckedCreateInput>
    /**
     * In case the MealPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealPlanUpdateInput, MealPlanUncheckedUpdateInput>
  }

  /**
   * MealPlan delete
   */
  export type MealPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
    /**
     * Filter which MealPlan to delete.
     */
    where: MealPlanWhereUniqueInput
  }

  /**
   * MealPlan deleteMany
   */
  export type MealPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlans to delete
     */
    where?: MealPlanWhereInput
    /**
     * Limit how many MealPlans to delete.
     */
    limit?: number
  }

  /**
   * MealPlan.items
   */
  export type MealPlan$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    where?: MealPlanItemWhereInput
    orderBy?: MealPlanItemOrderByWithRelationInput | MealPlanItemOrderByWithRelationInput[]
    cursor?: MealPlanItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MealPlanItemScalarFieldEnum | MealPlanItemScalarFieldEnum[]
  }

  /**
   * MealPlan without action
   */
  export type MealPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlan
     */
    select?: MealPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlan
     */
    omit?: MealPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanInclude<ExtArgs> | null
  }


  /**
   * Model MealPlanItem
   */

  export type AggregateMealPlanItem = {
    _count: MealPlanItemCountAggregateOutputType | null
    _min: MealPlanItemMinAggregateOutputType | null
    _max: MealPlanItemMaxAggregateOutputType | null
  }

  export type MealPlanItemMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    planId: string | null
    date: Date | null
    suggestion: string | null
    source: $Enums.LunchSource | null
    overridden: boolean | null
  }

  export type MealPlanItemMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    planId: string | null
    date: Date | null
    suggestion: string | null
    source: $Enums.LunchSource | null
    overridden: boolean | null
  }

  export type MealPlanItemCountAggregateOutputType = {
    id: number
    createdAt: number
    planId: number
    date: number
    suggestion: number
    source: number
    overridden: number
    _all: number
  }


  export type MealPlanItemMinAggregateInputType = {
    id?: true
    createdAt?: true
    planId?: true
    date?: true
    suggestion?: true
    source?: true
    overridden?: true
  }

  export type MealPlanItemMaxAggregateInputType = {
    id?: true
    createdAt?: true
    planId?: true
    date?: true
    suggestion?: true
    source?: true
    overridden?: true
  }

  export type MealPlanItemCountAggregateInputType = {
    id?: true
    createdAt?: true
    planId?: true
    date?: true
    suggestion?: true
    source?: true
    overridden?: true
    _all?: true
  }

  export type MealPlanItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlanItem to aggregate.
     */
    where?: MealPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlanItems to fetch.
     */
    orderBy?: MealPlanItemOrderByWithRelationInput | MealPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MealPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MealPlanItems
    **/
    _count?: true | MealPlanItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MealPlanItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MealPlanItemMaxAggregateInputType
  }

  export type GetMealPlanItemAggregateType<T extends MealPlanItemAggregateArgs> = {
        [P in keyof T & keyof AggregateMealPlanItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMealPlanItem[P]>
      : GetScalarType<T[P], AggregateMealPlanItem[P]>
  }




  export type MealPlanItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MealPlanItemWhereInput
    orderBy?: MealPlanItemOrderByWithAggregationInput | MealPlanItemOrderByWithAggregationInput[]
    by: MealPlanItemScalarFieldEnum[] | MealPlanItemScalarFieldEnum
    having?: MealPlanItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MealPlanItemCountAggregateInputType | true
    _min?: MealPlanItemMinAggregateInputType
    _max?: MealPlanItemMaxAggregateInputType
  }

  export type MealPlanItemGroupByOutputType = {
    id: string
    createdAt: Date
    planId: string
    date: Date
    suggestion: string
    source: $Enums.LunchSource
    overridden: boolean
    _count: MealPlanItemCountAggregateOutputType | null
    _min: MealPlanItemMinAggregateOutputType | null
    _max: MealPlanItemMaxAggregateOutputType | null
  }

  type GetMealPlanItemGroupByPayload<T extends MealPlanItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MealPlanItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MealPlanItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MealPlanItemGroupByOutputType[P]>
            : GetScalarType<T[P], MealPlanItemGroupByOutputType[P]>
        }
      >
    >


  export type MealPlanItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    planId?: boolean
    date?: boolean
    suggestion?: boolean
    source?: boolean
    overridden?: boolean
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlanItem"]>

  export type MealPlanItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    planId?: boolean
    date?: boolean
    suggestion?: boolean
    source?: boolean
    overridden?: boolean
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlanItem"]>

  export type MealPlanItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    planId?: boolean
    date?: boolean
    suggestion?: boolean
    source?: boolean
    overridden?: boolean
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mealPlanItem"]>

  export type MealPlanItemSelectScalar = {
    id?: boolean
    createdAt?: boolean
    planId?: boolean
    date?: boolean
    suggestion?: boolean
    source?: boolean
    overridden?: boolean
  }

  export type MealPlanItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "planId" | "date" | "suggestion" | "source" | "overridden", ExtArgs["result"]["mealPlanItem"]>
  export type MealPlanItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }
  export type MealPlanItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }
  export type MealPlanItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    plan?: boolean | MealPlanDefaultArgs<ExtArgs>
  }

  export type $MealPlanItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MealPlanItem"
    objects: {
      plan: Prisma.$MealPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      planId: string
      date: Date
      suggestion: string
      source: $Enums.LunchSource
      overridden: boolean
    }, ExtArgs["result"]["mealPlanItem"]>
    composites: {}
  }

  type MealPlanItemGetPayload<S extends boolean | null | undefined | MealPlanItemDefaultArgs> = $Result.GetResult<Prisma.$MealPlanItemPayload, S>

  type MealPlanItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MealPlanItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MealPlanItemCountAggregateInputType | true
    }

  export interface MealPlanItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MealPlanItem'], meta: { name: 'MealPlanItem' } }
    /**
     * Find zero or one MealPlanItem that matches the filter.
     * @param {MealPlanItemFindUniqueArgs} args - Arguments to find a MealPlanItem
     * @example
     * // Get one MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MealPlanItemFindUniqueArgs>(args: SelectSubset<T, MealPlanItemFindUniqueArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MealPlanItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MealPlanItemFindUniqueOrThrowArgs} args - Arguments to find a MealPlanItem
     * @example
     * // Get one MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MealPlanItemFindUniqueOrThrowArgs>(args: SelectSubset<T, MealPlanItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlanItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemFindFirstArgs} args - Arguments to find a MealPlanItem
     * @example
     * // Get one MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MealPlanItemFindFirstArgs>(args?: SelectSubset<T, MealPlanItemFindFirstArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MealPlanItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemFindFirstOrThrowArgs} args - Arguments to find a MealPlanItem
     * @example
     * // Get one MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MealPlanItemFindFirstOrThrowArgs>(args?: SelectSubset<T, MealPlanItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MealPlanItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MealPlanItems
     * const mealPlanItems = await prisma.mealPlanItem.findMany()
     * 
     * // Get first 10 MealPlanItems
     * const mealPlanItems = await prisma.mealPlanItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mealPlanItemWithIdOnly = await prisma.mealPlanItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MealPlanItemFindManyArgs>(args?: SelectSubset<T, MealPlanItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MealPlanItem.
     * @param {MealPlanItemCreateArgs} args - Arguments to create a MealPlanItem.
     * @example
     * // Create one MealPlanItem
     * const MealPlanItem = await prisma.mealPlanItem.create({
     *   data: {
     *     // ... data to create a MealPlanItem
     *   }
     * })
     * 
     */
    create<T extends MealPlanItemCreateArgs>(args: SelectSubset<T, MealPlanItemCreateArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MealPlanItems.
     * @param {MealPlanItemCreateManyArgs} args - Arguments to create many MealPlanItems.
     * @example
     * // Create many MealPlanItems
     * const mealPlanItem = await prisma.mealPlanItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MealPlanItemCreateManyArgs>(args?: SelectSubset<T, MealPlanItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MealPlanItems and returns the data saved in the database.
     * @param {MealPlanItemCreateManyAndReturnArgs} args - Arguments to create many MealPlanItems.
     * @example
     * // Create many MealPlanItems
     * const mealPlanItem = await prisma.mealPlanItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MealPlanItems and only return the `id`
     * const mealPlanItemWithIdOnly = await prisma.mealPlanItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MealPlanItemCreateManyAndReturnArgs>(args?: SelectSubset<T, MealPlanItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MealPlanItem.
     * @param {MealPlanItemDeleteArgs} args - Arguments to delete one MealPlanItem.
     * @example
     * // Delete one MealPlanItem
     * const MealPlanItem = await prisma.mealPlanItem.delete({
     *   where: {
     *     // ... filter to delete one MealPlanItem
     *   }
     * })
     * 
     */
    delete<T extends MealPlanItemDeleteArgs>(args: SelectSubset<T, MealPlanItemDeleteArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MealPlanItem.
     * @param {MealPlanItemUpdateArgs} args - Arguments to update one MealPlanItem.
     * @example
     * // Update one MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MealPlanItemUpdateArgs>(args: SelectSubset<T, MealPlanItemUpdateArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MealPlanItems.
     * @param {MealPlanItemDeleteManyArgs} args - Arguments to filter MealPlanItems to delete.
     * @example
     * // Delete a few MealPlanItems
     * const { count } = await prisma.mealPlanItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MealPlanItemDeleteManyArgs>(args?: SelectSubset<T, MealPlanItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MealPlanItems
     * const mealPlanItem = await prisma.mealPlanItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MealPlanItemUpdateManyArgs>(args: SelectSubset<T, MealPlanItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MealPlanItems and returns the data updated in the database.
     * @param {MealPlanItemUpdateManyAndReturnArgs} args - Arguments to update many MealPlanItems.
     * @example
     * // Update many MealPlanItems
     * const mealPlanItem = await prisma.mealPlanItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MealPlanItems and only return the `id`
     * const mealPlanItemWithIdOnly = await prisma.mealPlanItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MealPlanItemUpdateManyAndReturnArgs>(args: SelectSubset<T, MealPlanItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MealPlanItem.
     * @param {MealPlanItemUpsertArgs} args - Arguments to update or create a MealPlanItem.
     * @example
     * // Update or create a MealPlanItem
     * const mealPlanItem = await prisma.mealPlanItem.upsert({
     *   create: {
     *     // ... data to create a MealPlanItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MealPlanItem we want to update
     *   }
     * })
     */
    upsert<T extends MealPlanItemUpsertArgs>(args: SelectSubset<T, MealPlanItemUpsertArgs<ExtArgs>>): Prisma__MealPlanItemClient<$Result.GetResult<Prisma.$MealPlanItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MealPlanItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemCountArgs} args - Arguments to filter MealPlanItems to count.
     * @example
     * // Count the number of MealPlanItems
     * const count = await prisma.mealPlanItem.count({
     *   where: {
     *     // ... the filter for the MealPlanItems we want to count
     *   }
     * })
    **/
    count<T extends MealPlanItemCountArgs>(
      args?: Subset<T, MealPlanItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MealPlanItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MealPlanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MealPlanItemAggregateArgs>(args: Subset<T, MealPlanItemAggregateArgs>): Prisma.PrismaPromise<GetMealPlanItemAggregateType<T>>

    /**
     * Group by MealPlanItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MealPlanItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MealPlanItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MealPlanItemGroupByArgs['orderBy'] }
        : { orderBy?: MealPlanItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MealPlanItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMealPlanItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MealPlanItem model
   */
  readonly fields: MealPlanItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MealPlanItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MealPlanItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    plan<T extends MealPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MealPlanDefaultArgs<ExtArgs>>): Prisma__MealPlanClient<$Result.GetResult<Prisma.$MealPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MealPlanItem model
   */
  interface MealPlanItemFieldRefs {
    readonly id: FieldRef<"MealPlanItem", 'String'>
    readonly createdAt: FieldRef<"MealPlanItem", 'DateTime'>
    readonly planId: FieldRef<"MealPlanItem", 'String'>
    readonly date: FieldRef<"MealPlanItem", 'DateTime'>
    readonly suggestion: FieldRef<"MealPlanItem", 'String'>
    readonly source: FieldRef<"MealPlanItem", 'LunchSource'>
    readonly overridden: FieldRef<"MealPlanItem", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * MealPlanItem findUnique
   */
  export type MealPlanItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which MealPlanItem to fetch.
     */
    where: MealPlanItemWhereUniqueInput
  }

  /**
   * MealPlanItem findUniqueOrThrow
   */
  export type MealPlanItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which MealPlanItem to fetch.
     */
    where: MealPlanItemWhereUniqueInput
  }

  /**
   * MealPlanItem findFirst
   */
  export type MealPlanItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which MealPlanItem to fetch.
     */
    where?: MealPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlanItems to fetch.
     */
    orderBy?: MealPlanItemOrderByWithRelationInput | MealPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlanItems.
     */
    cursor?: MealPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlanItems.
     */
    distinct?: MealPlanItemScalarFieldEnum | MealPlanItemScalarFieldEnum[]
  }

  /**
   * MealPlanItem findFirstOrThrow
   */
  export type MealPlanItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which MealPlanItem to fetch.
     */
    where?: MealPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlanItems to fetch.
     */
    orderBy?: MealPlanItemOrderByWithRelationInput | MealPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MealPlanItems.
     */
    cursor?: MealPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlanItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MealPlanItems.
     */
    distinct?: MealPlanItemScalarFieldEnum | MealPlanItemScalarFieldEnum[]
  }

  /**
   * MealPlanItem findMany
   */
  export type MealPlanItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter, which MealPlanItems to fetch.
     */
    where?: MealPlanItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MealPlanItems to fetch.
     */
    orderBy?: MealPlanItemOrderByWithRelationInput | MealPlanItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MealPlanItems.
     */
    cursor?: MealPlanItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MealPlanItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MealPlanItems.
     */
    skip?: number
    distinct?: MealPlanItemScalarFieldEnum | MealPlanItemScalarFieldEnum[]
  }

  /**
   * MealPlanItem create
   */
  export type MealPlanItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * The data needed to create a MealPlanItem.
     */
    data: XOR<MealPlanItemCreateInput, MealPlanItemUncheckedCreateInput>
  }

  /**
   * MealPlanItem createMany
   */
  export type MealPlanItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MealPlanItems.
     */
    data: MealPlanItemCreateManyInput | MealPlanItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MealPlanItem createManyAndReturn
   */
  export type MealPlanItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * The data used to create many MealPlanItems.
     */
    data: MealPlanItemCreateManyInput | MealPlanItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlanItem update
   */
  export type MealPlanItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * The data needed to update a MealPlanItem.
     */
    data: XOR<MealPlanItemUpdateInput, MealPlanItemUncheckedUpdateInput>
    /**
     * Choose, which MealPlanItem to update.
     */
    where: MealPlanItemWhereUniqueInput
  }

  /**
   * MealPlanItem updateMany
   */
  export type MealPlanItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MealPlanItems.
     */
    data: XOR<MealPlanItemUpdateManyMutationInput, MealPlanItemUncheckedUpdateManyInput>
    /**
     * Filter which MealPlanItems to update
     */
    where?: MealPlanItemWhereInput
    /**
     * Limit how many MealPlanItems to update.
     */
    limit?: number
  }

  /**
   * MealPlanItem updateManyAndReturn
   */
  export type MealPlanItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * The data used to update MealPlanItems.
     */
    data: XOR<MealPlanItemUpdateManyMutationInput, MealPlanItemUncheckedUpdateManyInput>
    /**
     * Filter which MealPlanItems to update
     */
    where?: MealPlanItemWhereInput
    /**
     * Limit how many MealPlanItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MealPlanItem upsert
   */
  export type MealPlanItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * The filter to search for the MealPlanItem to update in case it exists.
     */
    where: MealPlanItemWhereUniqueInput
    /**
     * In case the MealPlanItem found by the `where` argument doesn't exist, create a new MealPlanItem with this data.
     */
    create: XOR<MealPlanItemCreateInput, MealPlanItemUncheckedCreateInput>
    /**
     * In case the MealPlanItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MealPlanItemUpdateInput, MealPlanItemUncheckedUpdateInput>
  }

  /**
   * MealPlanItem delete
   */
  export type MealPlanItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
    /**
     * Filter which MealPlanItem to delete.
     */
    where: MealPlanItemWhereUniqueInput
  }

  /**
   * MealPlanItem deleteMany
   */
  export type MealPlanItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MealPlanItems to delete
     */
    where?: MealPlanItemWhereInput
    /**
     * Limit how many MealPlanItems to delete.
     */
    limit?: number
  }

  /**
   * MealPlanItem without action
   */
  export type MealPlanItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MealPlanItem
     */
    select?: MealPlanItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MealPlanItem
     */
    omit?: MealPlanItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MealPlanItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserPreferencesScalarFieldEnum: {
    userId: 'userId',
    vegetarian: 'vegetarian',
    vegan: 'vegan',
    pescatarian: 'pescatarian',
    halal: 'halal',
    kosher: 'kosher',
    glutenFree: 'glutenFree',
    dairyFree: 'dairyFree',
    nutFree: 'nutFree',
    allergies: 'allergies',
    dislikedIngredients: 'dislikedIngredients',
    likedCuisines: 'likedCuisines',
    dislikedCuisines: 'dislikedCuisines',
    maxPrice: 'maxPrice',
    radiusMiles: 'radiusMiles',
    lunchDays: 'lunchDays',
    updatedAt: 'updatedAt'
  };

  export type UserPreferencesScalarFieldEnum = (typeof UserPreferencesScalarFieldEnum)[keyof typeof UserPreferencesScalarFieldEnum]


  export const MealEventScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    date: 'date',
    name: 'name',
    source: 'source',
    placeId: 'placeId',
    notes: 'notes',
    rating: 'rating',
    costCents: 'costCents'
  };

  export type MealEventScalarFieldEnum = (typeof MealEventScalarFieldEnum)[keyof typeof MealEventScalarFieldEnum]


  export const SwipeEventScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    date: 'date',
    suggestion: 'suggestion',
    decision: 'decision',
    reason: 'reason'
  };

  export type SwipeEventScalarFieldEnum = (typeof SwipeEventScalarFieldEnum)[keyof typeof SwipeEventScalarFieldEnum]


  export const MealPlanScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    weekStart: 'weekStart',
    source: 'source'
  };

  export type MealPlanScalarFieldEnum = (typeof MealPlanScalarFieldEnum)[keyof typeof MealPlanScalarFieldEnum]


  export const MealPlanItemScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    planId: 'planId',
    date: 'date',
    suggestion: 'suggestion',
    source: 'source',
    overridden: 'overridden'
  };

  export type MealPlanItemScalarFieldEnum = (typeof MealPlanItemScalarFieldEnum)[keyof typeof MealPlanItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'LunchSource'
   */
  export type EnumLunchSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LunchSource'>
    


  /**
   * Reference to a field of type 'LunchSource[]'
   */
  export type ListEnumLunchSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LunchSource[]'>
    


  /**
   * Reference to a field of type 'SwipeDecision'
   */
  export type EnumSwipeDecisionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeDecision'>
    


  /**
   * Reference to a field of type 'SwipeDecision[]'
   */
  export type ListEnumSwipeDecisionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SwipeDecision[]'>
    


  /**
   * Reference to a field of type 'PlanSource'
   */
  export type EnumPlanSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanSource'>
    


  /**
   * Reference to a field of type 'PlanSource[]'
   */
  export type ListEnumPlanSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PlanSource[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    meals?: MealEventListRelationFilter
    swipes?: SwipeEventListRelationFilter
    plans?: MealPlanListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    preferences?: UserPreferencesOrderByWithRelationInput
    meals?: MealEventOrderByRelationAggregateInput
    swipes?: SwipeEventOrderByRelationAggregateInput
    plans?: MealPlanOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    preferences?: XOR<UserPreferencesNullableScalarRelationFilter, UserPreferencesWhereInput> | null
    meals?: MealEventListRelationFilter
    swipes?: SwipeEventListRelationFilter
    plans?: MealPlanListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type UserPreferencesWhereInput = {
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    userId?: StringFilter<"UserPreferences"> | string
    vegetarian?: BoolFilter<"UserPreferences"> | boolean
    vegan?: BoolFilter<"UserPreferences"> | boolean
    pescatarian?: BoolFilter<"UserPreferences"> | boolean
    halal?: BoolFilter<"UserPreferences"> | boolean
    kosher?: BoolFilter<"UserPreferences"> | boolean
    glutenFree?: BoolFilter<"UserPreferences"> | boolean
    dairyFree?: BoolFilter<"UserPreferences"> | boolean
    nutFree?: BoolFilter<"UserPreferences"> | boolean
    allergies?: StringNullableListFilter<"UserPreferences">
    dislikedIngredients?: StringNullableListFilter<"UserPreferences">
    likedCuisines?: StringNullableListFilter<"UserPreferences">
    dislikedCuisines?: StringNullableListFilter<"UserPreferences">
    maxPrice?: IntNullableFilter<"UserPreferences"> | number | null
    radiusMiles?: FloatNullableFilter<"UserPreferences"> | number | null
    lunchDays?: IntNullableListFilter<"UserPreferences">
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserPreferencesOrderByWithRelationInput = {
    userId?: SortOrder
    vegetarian?: SortOrder
    vegan?: SortOrder
    pescatarian?: SortOrder
    halal?: SortOrder
    kosher?: SortOrder
    glutenFree?: SortOrder
    dairyFree?: SortOrder
    nutFree?: SortOrder
    allergies?: SortOrder
    dislikedIngredients?: SortOrder
    likedCuisines?: SortOrder
    dislikedCuisines?: SortOrder
    maxPrice?: SortOrderInput | SortOrder
    radiusMiles?: SortOrderInput | SortOrder
    lunchDays?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPreferencesWhereUniqueInput = Prisma.AtLeast<{
    userId?: string
    AND?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    OR?: UserPreferencesWhereInput[]
    NOT?: UserPreferencesWhereInput | UserPreferencesWhereInput[]
    vegetarian?: BoolFilter<"UserPreferences"> | boolean
    vegan?: BoolFilter<"UserPreferences"> | boolean
    pescatarian?: BoolFilter<"UserPreferences"> | boolean
    halal?: BoolFilter<"UserPreferences"> | boolean
    kosher?: BoolFilter<"UserPreferences"> | boolean
    glutenFree?: BoolFilter<"UserPreferences"> | boolean
    dairyFree?: BoolFilter<"UserPreferences"> | boolean
    nutFree?: BoolFilter<"UserPreferences"> | boolean
    allergies?: StringNullableListFilter<"UserPreferences">
    dislikedIngredients?: StringNullableListFilter<"UserPreferences">
    likedCuisines?: StringNullableListFilter<"UserPreferences">
    dislikedCuisines?: StringNullableListFilter<"UserPreferences">
    maxPrice?: IntNullableFilter<"UserPreferences"> | number | null
    radiusMiles?: FloatNullableFilter<"UserPreferences"> | number | null
    lunchDays?: IntNullableListFilter<"UserPreferences">
    updatedAt?: DateTimeFilter<"UserPreferences"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "userId">

  export type UserPreferencesOrderByWithAggregationInput = {
    userId?: SortOrder
    vegetarian?: SortOrder
    vegan?: SortOrder
    pescatarian?: SortOrder
    halal?: SortOrder
    kosher?: SortOrder
    glutenFree?: SortOrder
    dairyFree?: SortOrder
    nutFree?: SortOrder
    allergies?: SortOrder
    dislikedIngredients?: SortOrder
    likedCuisines?: SortOrder
    dislikedCuisines?: SortOrder
    maxPrice?: SortOrderInput | SortOrder
    radiusMiles?: SortOrderInput | SortOrder
    lunchDays?: SortOrder
    updatedAt?: SortOrder
    _count?: UserPreferencesCountOrderByAggregateInput
    _avg?: UserPreferencesAvgOrderByAggregateInput
    _max?: UserPreferencesMaxOrderByAggregateInput
    _min?: UserPreferencesMinOrderByAggregateInput
    _sum?: UserPreferencesSumOrderByAggregateInput
  }

  export type UserPreferencesScalarWhereWithAggregatesInput = {
    AND?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    OR?: UserPreferencesScalarWhereWithAggregatesInput[]
    NOT?: UserPreferencesScalarWhereWithAggregatesInput | UserPreferencesScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserPreferences"> | string
    vegetarian?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    vegan?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    pescatarian?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    halal?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    kosher?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    glutenFree?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    dairyFree?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    nutFree?: BoolWithAggregatesFilter<"UserPreferences"> | boolean
    allergies?: StringNullableListFilter<"UserPreferences">
    dislikedIngredients?: StringNullableListFilter<"UserPreferences">
    likedCuisines?: StringNullableListFilter<"UserPreferences">
    dislikedCuisines?: StringNullableListFilter<"UserPreferences">
    maxPrice?: IntNullableWithAggregatesFilter<"UserPreferences"> | number | null
    radiusMiles?: FloatNullableWithAggregatesFilter<"UserPreferences"> | number | null
    lunchDays?: IntNullableListFilter<"UserPreferences">
    updatedAt?: DateTimeWithAggregatesFilter<"UserPreferences"> | Date | string
  }

  export type MealEventWhereInput = {
    AND?: MealEventWhereInput | MealEventWhereInput[]
    OR?: MealEventWhereInput[]
    NOT?: MealEventWhereInput | MealEventWhereInput[]
    id?: StringFilter<"MealEvent"> | string
    createdAt?: DateTimeFilter<"MealEvent"> | Date | string
    userId?: StringFilter<"MealEvent"> | string
    date?: DateTimeFilter<"MealEvent"> | Date | string
    name?: StringFilter<"MealEvent"> | string
    source?: EnumLunchSourceFilter<"MealEvent"> | $Enums.LunchSource
    placeId?: StringNullableFilter<"MealEvent"> | string | null
    notes?: StringNullableFilter<"MealEvent"> | string | null
    rating?: IntNullableFilter<"MealEvent"> | number | null
    costCents?: IntNullableFilter<"MealEvent"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MealEventOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    name?: SortOrder
    source?: SortOrder
    placeId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    costCents?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type MealEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealEventWhereInput | MealEventWhereInput[]
    OR?: MealEventWhereInput[]
    NOT?: MealEventWhereInput | MealEventWhereInput[]
    createdAt?: DateTimeFilter<"MealEvent"> | Date | string
    userId?: StringFilter<"MealEvent"> | string
    date?: DateTimeFilter<"MealEvent"> | Date | string
    name?: StringFilter<"MealEvent"> | string
    source?: EnumLunchSourceFilter<"MealEvent"> | $Enums.LunchSource
    placeId?: StringNullableFilter<"MealEvent"> | string | null
    notes?: StringNullableFilter<"MealEvent"> | string | null
    rating?: IntNullableFilter<"MealEvent"> | number | null
    costCents?: IntNullableFilter<"MealEvent"> | number | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MealEventOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    name?: SortOrder
    source?: SortOrder
    placeId?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    costCents?: SortOrderInput | SortOrder
    _count?: MealEventCountOrderByAggregateInput
    _avg?: MealEventAvgOrderByAggregateInput
    _max?: MealEventMaxOrderByAggregateInput
    _min?: MealEventMinOrderByAggregateInput
    _sum?: MealEventSumOrderByAggregateInput
  }

  export type MealEventScalarWhereWithAggregatesInput = {
    AND?: MealEventScalarWhereWithAggregatesInput | MealEventScalarWhereWithAggregatesInput[]
    OR?: MealEventScalarWhereWithAggregatesInput[]
    NOT?: MealEventScalarWhereWithAggregatesInput | MealEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MealEvent"> | Date | string
    userId?: StringWithAggregatesFilter<"MealEvent"> | string
    date?: DateTimeWithAggregatesFilter<"MealEvent"> | Date | string
    name?: StringWithAggregatesFilter<"MealEvent"> | string
    source?: EnumLunchSourceWithAggregatesFilter<"MealEvent"> | $Enums.LunchSource
    placeId?: StringNullableWithAggregatesFilter<"MealEvent"> | string | null
    notes?: StringNullableWithAggregatesFilter<"MealEvent"> | string | null
    rating?: IntNullableWithAggregatesFilter<"MealEvent"> | number | null
    costCents?: IntNullableWithAggregatesFilter<"MealEvent"> | number | null
  }

  export type SwipeEventWhereInput = {
    AND?: SwipeEventWhereInput | SwipeEventWhereInput[]
    OR?: SwipeEventWhereInput[]
    NOT?: SwipeEventWhereInput | SwipeEventWhereInput[]
    id?: StringFilter<"SwipeEvent"> | string
    createdAt?: DateTimeFilter<"SwipeEvent"> | Date | string
    userId?: StringFilter<"SwipeEvent"> | string
    date?: DateTimeFilter<"SwipeEvent"> | Date | string
    suggestion?: StringFilter<"SwipeEvent"> | string
    decision?: EnumSwipeDecisionFilter<"SwipeEvent"> | $Enums.SwipeDecision
    reason?: StringNullableFilter<"SwipeEvent"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SwipeEventOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    suggestion?: SortOrder
    decision?: SortOrder
    reason?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SwipeEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SwipeEventWhereInput | SwipeEventWhereInput[]
    OR?: SwipeEventWhereInput[]
    NOT?: SwipeEventWhereInput | SwipeEventWhereInput[]
    createdAt?: DateTimeFilter<"SwipeEvent"> | Date | string
    userId?: StringFilter<"SwipeEvent"> | string
    date?: DateTimeFilter<"SwipeEvent"> | Date | string
    suggestion?: StringFilter<"SwipeEvent"> | string
    decision?: EnumSwipeDecisionFilter<"SwipeEvent"> | $Enums.SwipeDecision
    reason?: StringNullableFilter<"SwipeEvent"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type SwipeEventOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    suggestion?: SortOrder
    decision?: SortOrder
    reason?: SortOrderInput | SortOrder
    _count?: SwipeEventCountOrderByAggregateInput
    _max?: SwipeEventMaxOrderByAggregateInput
    _min?: SwipeEventMinOrderByAggregateInput
  }

  export type SwipeEventScalarWhereWithAggregatesInput = {
    AND?: SwipeEventScalarWhereWithAggregatesInput | SwipeEventScalarWhereWithAggregatesInput[]
    OR?: SwipeEventScalarWhereWithAggregatesInput[]
    NOT?: SwipeEventScalarWhereWithAggregatesInput | SwipeEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SwipeEvent"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SwipeEvent"> | Date | string
    userId?: StringWithAggregatesFilter<"SwipeEvent"> | string
    date?: DateTimeWithAggregatesFilter<"SwipeEvent"> | Date | string
    suggestion?: StringWithAggregatesFilter<"SwipeEvent"> | string
    decision?: EnumSwipeDecisionWithAggregatesFilter<"SwipeEvent"> | $Enums.SwipeDecision
    reason?: StringNullableWithAggregatesFilter<"SwipeEvent"> | string | null
  }

  export type MealPlanWhereInput = {
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    id?: StringFilter<"MealPlan"> | string
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
    userId?: StringFilter<"MealPlan"> | string
    weekStart?: DateTimeFilter<"MealPlan"> | Date | string
    source?: EnumPlanSourceFilter<"MealPlan"> | $Enums.PlanSource
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: MealPlanItemListRelationFilter
  }

  export type MealPlanOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    source?: SortOrder
    user?: UserOrderByWithRelationInput
    items?: MealPlanItemOrderByRelationAggregateInput
  }

  export type MealPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_weekStart?: MealPlanUserIdWeekStartCompoundUniqueInput
    AND?: MealPlanWhereInput | MealPlanWhereInput[]
    OR?: MealPlanWhereInput[]
    NOT?: MealPlanWhereInput | MealPlanWhereInput[]
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
    userId?: StringFilter<"MealPlan"> | string
    weekStart?: DateTimeFilter<"MealPlan"> | Date | string
    source?: EnumPlanSourceFilter<"MealPlan"> | $Enums.PlanSource
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: MealPlanItemListRelationFilter
  }, "id" | "userId_weekStart">

  export type MealPlanOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    source?: SortOrder
    _count?: MealPlanCountOrderByAggregateInput
    _max?: MealPlanMaxOrderByAggregateInput
    _min?: MealPlanMinOrderByAggregateInput
  }

  export type MealPlanScalarWhereWithAggregatesInput = {
    AND?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    OR?: MealPlanScalarWhereWithAggregatesInput[]
    NOT?: MealPlanScalarWhereWithAggregatesInput | MealPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealPlan"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
    userId?: StringWithAggregatesFilter<"MealPlan"> | string
    weekStart?: DateTimeWithAggregatesFilter<"MealPlan"> | Date | string
    source?: EnumPlanSourceWithAggregatesFilter<"MealPlan"> | $Enums.PlanSource
  }

  export type MealPlanItemWhereInput = {
    AND?: MealPlanItemWhereInput | MealPlanItemWhereInput[]
    OR?: MealPlanItemWhereInput[]
    NOT?: MealPlanItemWhereInput | MealPlanItemWhereInput[]
    id?: StringFilter<"MealPlanItem"> | string
    createdAt?: DateTimeFilter<"MealPlanItem"> | Date | string
    planId?: StringFilter<"MealPlanItem"> | string
    date?: DateTimeFilter<"MealPlanItem"> | Date | string
    suggestion?: StringFilter<"MealPlanItem"> | string
    source?: EnumLunchSourceFilter<"MealPlanItem"> | $Enums.LunchSource
    overridden?: BoolFilter<"MealPlanItem"> | boolean
    plan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
  }

  export type MealPlanItemOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    date?: SortOrder
    suggestion?: SortOrder
    source?: SortOrder
    overridden?: SortOrder
    plan?: MealPlanOrderByWithRelationInput
  }

  export type MealPlanItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MealPlanItemWhereInput | MealPlanItemWhereInput[]
    OR?: MealPlanItemWhereInput[]
    NOT?: MealPlanItemWhereInput | MealPlanItemWhereInput[]
    createdAt?: DateTimeFilter<"MealPlanItem"> | Date | string
    planId?: StringFilter<"MealPlanItem"> | string
    date?: DateTimeFilter<"MealPlanItem"> | Date | string
    suggestion?: StringFilter<"MealPlanItem"> | string
    source?: EnumLunchSourceFilter<"MealPlanItem"> | $Enums.LunchSource
    overridden?: BoolFilter<"MealPlanItem"> | boolean
    plan?: XOR<MealPlanScalarRelationFilter, MealPlanWhereInput>
  }, "id">

  export type MealPlanItemOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    date?: SortOrder
    suggestion?: SortOrder
    source?: SortOrder
    overridden?: SortOrder
    _count?: MealPlanItemCountOrderByAggregateInput
    _max?: MealPlanItemMaxOrderByAggregateInput
    _min?: MealPlanItemMinOrderByAggregateInput
  }

  export type MealPlanItemScalarWhereWithAggregatesInput = {
    AND?: MealPlanItemScalarWhereWithAggregatesInput | MealPlanItemScalarWhereWithAggregatesInput[]
    OR?: MealPlanItemScalarWhereWithAggregatesInput[]
    NOT?: MealPlanItemScalarWhereWithAggregatesInput | MealPlanItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MealPlanItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MealPlanItem"> | Date | string
    planId?: StringWithAggregatesFilter<"MealPlanItem"> | string
    date?: DateTimeWithAggregatesFilter<"MealPlanItem"> | Date | string
    suggestion?: StringWithAggregatesFilter<"MealPlanItem"> | string
    source?: EnumLunchSourceWithAggregatesFilter<"MealPlanItem"> | $Enums.LunchSource
    overridden?: BoolWithAggregatesFilter<"MealPlanItem"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    name?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    meals?: MealEventCreateNestedManyWithoutUserInput
    swipes?: SwipeEventCreateNestedManyWithoutUserInput
    plans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    name?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    meals?: MealEventUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
    plans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    meals?: MealEventUpdateManyWithoutUserNestedInput
    swipes?: SwipeEventUpdateManyWithoutUserNestedInput
    plans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    meals?: MealEventUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
    plans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserPreferencesCreateInput = {
    vegetarian?: boolean
    vegan?: boolean
    pescatarian?: boolean
    halal?: boolean
    kosher?: boolean
    glutenFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    allergies?: UserPreferencesCreateallergiesInput | string[]
    dislikedIngredients?: UserPreferencesCreatedislikedIngredientsInput | string[]
    likedCuisines?: UserPreferencesCreatelikedCuisinesInput | string[]
    dislikedCuisines?: UserPreferencesCreatedislikedCuisinesInput | string[]
    maxPrice?: number | null
    radiusMiles?: number | null
    lunchDays?: UserPreferencesCreatelunchDaysInput | number[]
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutPreferencesInput
  }

  export type UserPreferencesUncheckedCreateInput = {
    userId: string
    vegetarian?: boolean
    vegan?: boolean
    pescatarian?: boolean
    halal?: boolean
    kosher?: boolean
    glutenFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    allergies?: UserPreferencesCreateallergiesInput | string[]
    dislikedIngredients?: UserPreferencesCreatedislikedIngredientsInput | string[]
    likedCuisines?: UserPreferencesCreatelikedCuisinesInput | string[]
    dislikedCuisines?: UserPreferencesCreatedislikedCuisinesInput | string[]
    maxPrice?: number | null
    radiusMiles?: number | null
    lunchDays?: UserPreferencesCreatelunchDaysInput | number[]
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateInput = {
    vegetarian?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    halal?: BoolFieldUpdateOperationsInput | boolean
    kosher?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    dislikedIngredients?: UserPreferencesUpdatedislikedIngredientsInput | string[]
    likedCuisines?: UserPreferencesUpdatelikedCuisinesInput | string[]
    dislikedCuisines?: UserPreferencesUpdatedislikedCuisinesInput | string[]
    maxPrice?: NullableIntFieldUpdateOperationsInput | number | null
    radiusMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    lunchDays?: UserPreferencesUpdatelunchDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPreferencesNestedInput
  }

  export type UserPreferencesUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    vegetarian?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    halal?: BoolFieldUpdateOperationsInput | boolean
    kosher?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    dislikedIngredients?: UserPreferencesUpdatedislikedIngredientsInput | string[]
    likedCuisines?: UserPreferencesUpdatelikedCuisinesInput | string[]
    dislikedCuisines?: UserPreferencesUpdatedislikedCuisinesInput | string[]
    maxPrice?: NullableIntFieldUpdateOperationsInput | number | null
    radiusMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    lunchDays?: UserPreferencesUpdatelunchDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesCreateManyInput = {
    userId: string
    vegetarian?: boolean
    vegan?: boolean
    pescatarian?: boolean
    halal?: boolean
    kosher?: boolean
    glutenFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    allergies?: UserPreferencesCreateallergiesInput | string[]
    dislikedIngredients?: UserPreferencesCreatedislikedIngredientsInput | string[]
    likedCuisines?: UserPreferencesCreatelikedCuisinesInput | string[]
    dislikedCuisines?: UserPreferencesCreatedislikedCuisinesInput | string[]
    maxPrice?: number | null
    radiusMiles?: number | null
    lunchDays?: UserPreferencesCreatelunchDaysInput | number[]
    updatedAt?: Date | string
  }

  export type UserPreferencesUpdateManyMutationInput = {
    vegetarian?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    halal?: BoolFieldUpdateOperationsInput | boolean
    kosher?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    dislikedIngredients?: UserPreferencesUpdatedislikedIngredientsInput | string[]
    likedCuisines?: UserPreferencesUpdatelikedCuisinesInput | string[]
    dislikedCuisines?: UserPreferencesUpdatedislikedCuisinesInput | string[]
    maxPrice?: NullableIntFieldUpdateOperationsInput | number | null
    radiusMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    lunchDays?: UserPreferencesUpdatelunchDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    vegetarian?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    halal?: BoolFieldUpdateOperationsInput | boolean
    kosher?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    dislikedIngredients?: UserPreferencesUpdatedislikedIngredientsInput | string[]
    likedCuisines?: UserPreferencesUpdatelikedCuisinesInput | string[]
    dislikedCuisines?: UserPreferencesUpdatedislikedCuisinesInput | string[]
    maxPrice?: NullableIntFieldUpdateOperationsInput | number | null
    radiusMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    lunchDays?: UserPreferencesUpdatelunchDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealEventCreateInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    name: string
    source?: $Enums.LunchSource
    placeId?: string | null
    notes?: string | null
    rating?: number | null
    costCents?: number | null
    user: UserCreateNestedOneWithoutMealsInput
  }

  export type MealEventUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    date: Date | string
    name: string
    source?: $Enums.LunchSource
    placeId?: string | null
    notes?: string | null
    rating?: number | null
    costCents?: number | null
  }

  export type MealEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    costCents?: NullableIntFieldUpdateOperationsInput | number | null
    user?: UserUpdateOneRequiredWithoutMealsNestedInput
  }

  export type MealEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    costCents?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MealEventCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    date: Date | string
    name: string
    source?: $Enums.LunchSource
    placeId?: string | null
    notes?: string | null
    rating?: number | null
    costCents?: number | null
  }

  export type MealEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    costCents?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MealEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    costCents?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SwipeEventCreateInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    suggestion: string
    decision: $Enums.SwipeDecision
    reason?: string | null
    user: UserCreateNestedOneWithoutSwipesInput
  }

  export type SwipeEventUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    date: Date | string
    suggestion: string
    decision: $Enums.SwipeDecision
    reason?: string | null
  }

  export type SwipeEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    decision?: EnumSwipeDecisionFieldUpdateOperationsInput | $Enums.SwipeDecision
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutSwipesNestedInput
  }

  export type SwipeEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    decision?: EnumSwipeDecisionFieldUpdateOperationsInput | $Enums.SwipeDecision
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SwipeEventCreateManyInput = {
    id?: string
    createdAt?: Date | string
    userId: string
    date: Date | string
    suggestion: string
    decision: $Enums.SwipeDecision
    reason?: string | null
  }

  export type SwipeEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    decision?: EnumSwipeDecisionFieldUpdateOperationsInput | $Enums.SwipeDecision
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SwipeEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    decision?: EnumSwipeDecisionFieldUpdateOperationsInput | $Enums.SwipeDecision
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealPlanCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weekStart: Date | string
    source?: $Enums.PlanSource
    user: UserCreateNestedOneWithoutPlansInput
    items?: MealPlanItemCreateNestedManyWithoutPlanInput
  }

  export type MealPlanUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    weekStart: Date | string
    source?: $Enums.PlanSource
    items?: MealPlanItemUncheckedCreateNestedManyWithoutPlanInput
  }

  export type MealPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPlanSourceFieldUpdateOperationsInput | $Enums.PlanSource
    user?: UserUpdateOneRequiredWithoutPlansNestedInput
    items?: MealPlanItemUpdateManyWithoutPlanNestedInput
  }

  export type MealPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPlanSourceFieldUpdateOperationsInput | $Enums.PlanSource
    items?: MealPlanItemUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type MealPlanCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    weekStart: Date | string
    source?: $Enums.PlanSource
  }

  export type MealPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPlanSourceFieldUpdateOperationsInput | $Enums.PlanSource
  }

  export type MealPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPlanSourceFieldUpdateOperationsInput | $Enums.PlanSource
  }

  export type MealPlanItemCreateInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    suggestion: string
    source?: $Enums.LunchSource
    overridden?: boolean
    plan: MealPlanCreateNestedOneWithoutItemsInput
  }

  export type MealPlanItemUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    planId: string
    date: Date | string
    suggestion: string
    source?: $Enums.LunchSource
    overridden?: boolean
  }

  export type MealPlanItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    overridden?: BoolFieldUpdateOperationsInput | boolean
    plan?: MealPlanUpdateOneRequiredWithoutItemsNestedInput
  }

  export type MealPlanItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    overridden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MealPlanItemCreateManyInput = {
    id?: string
    createdAt?: Date | string
    planId: string
    date: Date | string
    suggestion: string
    source?: $Enums.LunchSource
    overridden?: boolean
  }

  export type MealPlanItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    overridden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MealPlanItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    planId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    overridden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserPreferencesNullableScalarRelationFilter = {
    is?: UserPreferencesWhereInput | null
    isNot?: UserPreferencesWhereInput | null
  }

  export type MealEventListRelationFilter = {
    every?: MealEventWhereInput
    some?: MealEventWhereInput
    none?: MealEventWhereInput
  }

  export type SwipeEventListRelationFilter = {
    every?: SwipeEventWhereInput
    some?: SwipeEventWhereInput
    none?: SwipeEventWhereInput
  }

  export type MealPlanListRelationFilter = {
    every?: MealPlanWhereInput
    some?: MealPlanWhereInput
    none?: MealPlanWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MealEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SwipeEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserPreferencesCountOrderByAggregateInput = {
    userId?: SortOrder
    vegetarian?: SortOrder
    vegan?: SortOrder
    pescatarian?: SortOrder
    halal?: SortOrder
    kosher?: SortOrder
    glutenFree?: SortOrder
    dairyFree?: SortOrder
    nutFree?: SortOrder
    allergies?: SortOrder
    dislikedIngredients?: SortOrder
    likedCuisines?: SortOrder
    dislikedCuisines?: SortOrder
    maxPrice?: SortOrder
    radiusMiles?: SortOrder
    lunchDays?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesAvgOrderByAggregateInput = {
    maxPrice?: SortOrder
    radiusMiles?: SortOrder
    lunchDays?: SortOrder
  }

  export type UserPreferencesMaxOrderByAggregateInput = {
    userId?: SortOrder
    vegetarian?: SortOrder
    vegan?: SortOrder
    pescatarian?: SortOrder
    halal?: SortOrder
    kosher?: SortOrder
    glutenFree?: SortOrder
    dairyFree?: SortOrder
    nutFree?: SortOrder
    maxPrice?: SortOrder
    radiusMiles?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesMinOrderByAggregateInput = {
    userId?: SortOrder
    vegetarian?: SortOrder
    vegan?: SortOrder
    pescatarian?: SortOrder
    halal?: SortOrder
    kosher?: SortOrder
    glutenFree?: SortOrder
    dairyFree?: SortOrder
    nutFree?: SortOrder
    maxPrice?: SortOrder
    radiusMiles?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPreferencesSumOrderByAggregateInput = {
    maxPrice?: SortOrder
    radiusMiles?: SortOrder
    lunchDays?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumLunchSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LunchSource | EnumLunchSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LunchSource[] | ListEnumLunchSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LunchSource[] | ListEnumLunchSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLunchSourceFilter<$PrismaModel> | $Enums.LunchSource
  }

  export type MealEventCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    name?: SortOrder
    source?: SortOrder
    placeId?: SortOrder
    notes?: SortOrder
    rating?: SortOrder
    costCents?: SortOrder
  }

  export type MealEventAvgOrderByAggregateInput = {
    rating?: SortOrder
    costCents?: SortOrder
  }

  export type MealEventMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    name?: SortOrder
    source?: SortOrder
    placeId?: SortOrder
    notes?: SortOrder
    rating?: SortOrder
    costCents?: SortOrder
  }

  export type MealEventMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    name?: SortOrder
    source?: SortOrder
    placeId?: SortOrder
    notes?: SortOrder
    rating?: SortOrder
    costCents?: SortOrder
  }

  export type MealEventSumOrderByAggregateInput = {
    rating?: SortOrder
    costCents?: SortOrder
  }

  export type EnumLunchSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LunchSource | EnumLunchSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LunchSource[] | ListEnumLunchSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LunchSource[] | ListEnumLunchSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLunchSourceWithAggregatesFilter<$PrismaModel> | $Enums.LunchSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLunchSourceFilter<$PrismaModel>
    _max?: NestedEnumLunchSourceFilter<$PrismaModel>
  }

  export type EnumSwipeDecisionFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeDecision | EnumSwipeDecisionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeDecision[] | ListEnumSwipeDecisionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeDecision[] | ListEnumSwipeDecisionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeDecisionFilter<$PrismaModel> | $Enums.SwipeDecision
  }

  export type SwipeEventCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    suggestion?: SortOrder
    decision?: SortOrder
    reason?: SortOrder
  }

  export type SwipeEventMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    suggestion?: SortOrder
    decision?: SortOrder
    reason?: SortOrder
  }

  export type SwipeEventMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    suggestion?: SortOrder
    decision?: SortOrder
    reason?: SortOrder
  }

  export type EnumSwipeDecisionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeDecision | EnumSwipeDecisionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeDecision[] | ListEnumSwipeDecisionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeDecision[] | ListEnumSwipeDecisionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeDecisionWithAggregatesFilter<$PrismaModel> | $Enums.SwipeDecision
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwipeDecisionFilter<$PrismaModel>
    _max?: NestedEnumSwipeDecisionFilter<$PrismaModel>
  }

  export type EnumPlanSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanSource | EnumPlanSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PlanSource[] | ListEnumPlanSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanSource[] | ListEnumPlanSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanSourceFilter<$PrismaModel> | $Enums.PlanSource
  }

  export type MealPlanItemListRelationFilter = {
    every?: MealPlanItemWhereInput
    some?: MealPlanItemWhereInput
    none?: MealPlanItemWhereInput
  }

  export type MealPlanItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MealPlanUserIdWeekStartCompoundUniqueInput = {
    userId: string
    weekStart: Date | string
  }

  export type MealPlanCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    source?: SortOrder
  }

  export type MealPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    source?: SortOrder
  }

  export type MealPlanMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    source?: SortOrder
  }

  export type EnumPlanSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanSource | EnumPlanSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PlanSource[] | ListEnumPlanSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanSource[] | ListEnumPlanSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanSourceWithAggregatesFilter<$PrismaModel> | $Enums.PlanSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanSourceFilter<$PrismaModel>
    _max?: NestedEnumPlanSourceFilter<$PrismaModel>
  }

  export type MealPlanScalarRelationFilter = {
    is?: MealPlanWhereInput
    isNot?: MealPlanWhereInput
  }

  export type MealPlanItemCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    date?: SortOrder
    suggestion?: SortOrder
    source?: SortOrder
    overridden?: SortOrder
  }

  export type MealPlanItemMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    date?: SortOrder
    suggestion?: SortOrder
    source?: SortOrder
    overridden?: SortOrder
  }

  export type MealPlanItemMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    planId?: SortOrder
    date?: SortOrder
    suggestion?: SortOrder
    source?: SortOrder
    overridden?: SortOrder
  }

  export type UserPreferencesCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type MealEventCreateNestedManyWithoutUserInput = {
    create?: XOR<MealEventCreateWithoutUserInput, MealEventUncheckedCreateWithoutUserInput> | MealEventCreateWithoutUserInput[] | MealEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealEventCreateOrConnectWithoutUserInput | MealEventCreateOrConnectWithoutUserInput[]
    createMany?: MealEventCreateManyUserInputEnvelope
    connect?: MealEventWhereUniqueInput | MealEventWhereUniqueInput[]
  }

  export type SwipeEventCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput> | SwipeEventCreateWithoutUserInput[] | SwipeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutUserInput | SwipeEventCreateOrConnectWithoutUserInput[]
    createMany?: SwipeEventCreateManyUserInputEnvelope
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
  }

  export type MealPlanCreateNestedManyWithoutUserInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type UserPreferencesUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    connect?: UserPreferencesWhereUniqueInput
  }

  export type MealEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealEventCreateWithoutUserInput, MealEventUncheckedCreateWithoutUserInput> | MealEventCreateWithoutUserInput[] | MealEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealEventCreateOrConnectWithoutUserInput | MealEventCreateOrConnectWithoutUserInput[]
    createMany?: MealEventCreateManyUserInputEnvelope
    connect?: MealEventWhereUniqueInput | MealEventWhereUniqueInput[]
  }

  export type SwipeEventUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput> | SwipeEventCreateWithoutUserInput[] | SwipeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutUserInput | SwipeEventCreateOrConnectWithoutUserInput[]
    createMany?: SwipeEventCreateManyUserInputEnvelope
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
  }

  export type MealPlanUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserPreferencesUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type MealEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealEventCreateWithoutUserInput, MealEventUncheckedCreateWithoutUserInput> | MealEventCreateWithoutUserInput[] | MealEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealEventCreateOrConnectWithoutUserInput | MealEventCreateOrConnectWithoutUserInput[]
    upsert?: MealEventUpsertWithWhereUniqueWithoutUserInput | MealEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealEventCreateManyUserInputEnvelope
    set?: MealEventWhereUniqueInput | MealEventWhereUniqueInput[]
    disconnect?: MealEventWhereUniqueInput | MealEventWhereUniqueInput[]
    delete?: MealEventWhereUniqueInput | MealEventWhereUniqueInput[]
    connect?: MealEventWhereUniqueInput | MealEventWhereUniqueInput[]
    update?: MealEventUpdateWithWhereUniqueWithoutUserInput | MealEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealEventUpdateManyWithWhereWithoutUserInput | MealEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealEventScalarWhereInput | MealEventScalarWhereInput[]
  }

  export type SwipeEventUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput> | SwipeEventCreateWithoutUserInput[] | SwipeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutUserInput | SwipeEventCreateOrConnectWithoutUserInput[]
    upsert?: SwipeEventUpsertWithWhereUniqueWithoutUserInput | SwipeEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwipeEventCreateManyUserInputEnvelope
    set?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    disconnect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    delete?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    update?: SwipeEventUpdateWithWhereUniqueWithoutUserInput | SwipeEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwipeEventUpdateManyWithWhereWithoutUserInput | SwipeEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
  }

  export type MealPlanUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutUserInput | MealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutUserInput | MealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutUserInput | MealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type UserPreferencesUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserPreferencesCreateOrConnectWithoutUserInput
    upsert?: UserPreferencesUpsertWithoutUserInput
    disconnect?: UserPreferencesWhereInput | boolean
    delete?: UserPreferencesWhereInput | boolean
    connect?: UserPreferencesWhereUniqueInput
    update?: XOR<XOR<UserPreferencesUpdateToOneWithWhereWithoutUserInput, UserPreferencesUpdateWithoutUserInput>, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type MealEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealEventCreateWithoutUserInput, MealEventUncheckedCreateWithoutUserInput> | MealEventCreateWithoutUserInput[] | MealEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealEventCreateOrConnectWithoutUserInput | MealEventCreateOrConnectWithoutUserInput[]
    upsert?: MealEventUpsertWithWhereUniqueWithoutUserInput | MealEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealEventCreateManyUserInputEnvelope
    set?: MealEventWhereUniqueInput | MealEventWhereUniqueInput[]
    disconnect?: MealEventWhereUniqueInput | MealEventWhereUniqueInput[]
    delete?: MealEventWhereUniqueInput | MealEventWhereUniqueInput[]
    connect?: MealEventWhereUniqueInput | MealEventWhereUniqueInput[]
    update?: MealEventUpdateWithWhereUniqueWithoutUserInput | MealEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealEventUpdateManyWithWhereWithoutUserInput | MealEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealEventScalarWhereInput | MealEventScalarWhereInput[]
  }

  export type SwipeEventUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput> | SwipeEventCreateWithoutUserInput[] | SwipeEventUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SwipeEventCreateOrConnectWithoutUserInput | SwipeEventCreateOrConnectWithoutUserInput[]
    upsert?: SwipeEventUpsertWithWhereUniqueWithoutUserInput | SwipeEventUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SwipeEventCreateManyUserInputEnvelope
    set?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    disconnect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    delete?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    connect?: SwipeEventWhereUniqueInput | SwipeEventWhereUniqueInput[]
    update?: SwipeEventUpdateWithWhereUniqueWithoutUserInput | SwipeEventUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SwipeEventUpdateManyWithWhereWithoutUserInput | SwipeEventUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
  }

  export type MealPlanUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput> | MealPlanCreateWithoutUserInput[] | MealPlanUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MealPlanCreateOrConnectWithoutUserInput | MealPlanCreateOrConnectWithoutUserInput[]
    upsert?: MealPlanUpsertWithWhereUniqueWithoutUserInput | MealPlanUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MealPlanCreateManyUserInputEnvelope
    set?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    disconnect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    delete?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    connect?: MealPlanWhereUniqueInput | MealPlanWhereUniqueInput[]
    update?: MealPlanUpdateWithWhereUniqueWithoutUserInput | MealPlanUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MealPlanUpdateManyWithWhereWithoutUserInput | MealPlanUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
  }

  export type UserPreferencesCreateallergiesInput = {
    set: string[]
  }

  export type UserPreferencesCreatedislikedIngredientsInput = {
    set: string[]
  }

  export type UserPreferencesCreatelikedCuisinesInput = {
    set: string[]
  }

  export type UserPreferencesCreatedislikedCuisinesInput = {
    set: string[]
  }

  export type UserPreferencesCreatelunchDaysInput = {
    set: number[]
  }

  export type UserCreateNestedOneWithoutPreferencesInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserPreferencesUpdateallergiesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserPreferencesUpdatedislikedIngredientsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserPreferencesUpdatelikedCuisinesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserPreferencesUpdatedislikedCuisinesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserPreferencesUpdatelunchDaysInput = {
    set?: number[]
    push?: number | number[]
  }

  export type UserUpdateOneRequiredWithoutPreferencesNestedInput = {
    create?: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreferencesInput
    upsert?: UserUpsertWithoutPreferencesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreferencesInput, UserUpdateWithoutPreferencesInput>, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserCreateNestedOneWithoutMealsInput = {
    create?: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumLunchSourceFieldUpdateOperationsInput = {
    set?: $Enums.LunchSource
  }

  export type UserUpdateOneRequiredWithoutMealsNestedInput = {
    create?: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMealsInput
    upsert?: UserUpsertWithoutMealsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMealsInput, UserUpdateWithoutMealsInput>, UserUncheckedUpdateWithoutMealsInput>
  }

  export type UserCreateNestedOneWithoutSwipesInput = {
    create?: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesInput
    connect?: UserWhereUniqueInput
  }

  export type EnumSwipeDecisionFieldUpdateOperationsInput = {
    set?: $Enums.SwipeDecision
  }

  export type UserUpdateOneRequiredWithoutSwipesNestedInput = {
    create?: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSwipesInput
    upsert?: UserUpsertWithoutSwipesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSwipesInput, UserUpdateWithoutSwipesInput>, UserUncheckedUpdateWithoutSwipesInput>
  }

  export type UserCreateNestedOneWithoutPlansInput = {
    create?: XOR<UserCreateWithoutPlansInput, UserUncheckedCreateWithoutPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlansInput
    connect?: UserWhereUniqueInput
  }

  export type MealPlanItemCreateNestedManyWithoutPlanInput = {
    create?: XOR<MealPlanItemCreateWithoutPlanInput, MealPlanItemUncheckedCreateWithoutPlanInput> | MealPlanItemCreateWithoutPlanInput[] | MealPlanItemUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutPlanInput | MealPlanItemCreateOrConnectWithoutPlanInput[]
    createMany?: MealPlanItemCreateManyPlanInputEnvelope
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
  }

  export type MealPlanItemUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<MealPlanItemCreateWithoutPlanInput, MealPlanItemUncheckedCreateWithoutPlanInput> | MealPlanItemCreateWithoutPlanInput[] | MealPlanItemUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutPlanInput | MealPlanItemCreateOrConnectWithoutPlanInput[]
    createMany?: MealPlanItemCreateManyPlanInputEnvelope
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
  }

  export type EnumPlanSourceFieldUpdateOperationsInput = {
    set?: $Enums.PlanSource
  }

  export type UserUpdateOneRequiredWithoutPlansNestedInput = {
    create?: XOR<UserCreateWithoutPlansInput, UserUncheckedCreateWithoutPlansInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlansInput
    upsert?: UserUpsertWithoutPlansInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPlansInput, UserUpdateWithoutPlansInput>, UserUncheckedUpdateWithoutPlansInput>
  }

  export type MealPlanItemUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MealPlanItemCreateWithoutPlanInput, MealPlanItemUncheckedCreateWithoutPlanInput> | MealPlanItemCreateWithoutPlanInput[] | MealPlanItemUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutPlanInput | MealPlanItemCreateOrConnectWithoutPlanInput[]
    upsert?: MealPlanItemUpsertWithWhereUniqueWithoutPlanInput | MealPlanItemUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MealPlanItemCreateManyPlanInputEnvelope
    set?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    disconnect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    delete?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    update?: MealPlanItemUpdateWithWhereUniqueWithoutPlanInput | MealPlanItemUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MealPlanItemUpdateManyWithWhereWithoutPlanInput | MealPlanItemUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MealPlanItemScalarWhereInput | MealPlanItemScalarWhereInput[]
  }

  export type MealPlanItemUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<MealPlanItemCreateWithoutPlanInput, MealPlanItemUncheckedCreateWithoutPlanInput> | MealPlanItemCreateWithoutPlanInput[] | MealPlanItemUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: MealPlanItemCreateOrConnectWithoutPlanInput | MealPlanItemCreateOrConnectWithoutPlanInput[]
    upsert?: MealPlanItemUpsertWithWhereUniqueWithoutPlanInput | MealPlanItemUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: MealPlanItemCreateManyPlanInputEnvelope
    set?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    disconnect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    delete?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    connect?: MealPlanItemWhereUniqueInput | MealPlanItemWhereUniqueInput[]
    update?: MealPlanItemUpdateWithWhereUniqueWithoutPlanInput | MealPlanItemUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: MealPlanItemUpdateManyWithWhereWithoutPlanInput | MealPlanItemUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: MealPlanItemScalarWhereInput | MealPlanItemScalarWhereInput[]
  }

  export type MealPlanCreateNestedOneWithoutItemsInput = {
    create?: XOR<MealPlanCreateWithoutItemsInput, MealPlanUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutItemsInput
    connect?: MealPlanWhereUniqueInput
  }

  export type MealPlanUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<MealPlanCreateWithoutItemsInput, MealPlanUncheckedCreateWithoutItemsInput>
    connectOrCreate?: MealPlanCreateOrConnectWithoutItemsInput
    upsert?: MealPlanUpsertWithoutItemsInput
    connect?: MealPlanWhereUniqueInput
    update?: XOR<XOR<MealPlanUpdateToOneWithWhereWithoutItemsInput, MealPlanUpdateWithoutItemsInput>, MealPlanUncheckedUpdateWithoutItemsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumLunchSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.LunchSource | EnumLunchSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LunchSource[] | ListEnumLunchSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LunchSource[] | ListEnumLunchSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLunchSourceFilter<$PrismaModel> | $Enums.LunchSource
  }

  export type NestedEnumLunchSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LunchSource | EnumLunchSourceFieldRefInput<$PrismaModel>
    in?: $Enums.LunchSource[] | ListEnumLunchSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.LunchSource[] | ListEnumLunchSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumLunchSourceWithAggregatesFilter<$PrismaModel> | $Enums.LunchSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLunchSourceFilter<$PrismaModel>
    _max?: NestedEnumLunchSourceFilter<$PrismaModel>
  }

  export type NestedEnumSwipeDecisionFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeDecision | EnumSwipeDecisionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeDecision[] | ListEnumSwipeDecisionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeDecision[] | ListEnumSwipeDecisionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeDecisionFilter<$PrismaModel> | $Enums.SwipeDecision
  }

  export type NestedEnumSwipeDecisionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SwipeDecision | EnumSwipeDecisionFieldRefInput<$PrismaModel>
    in?: $Enums.SwipeDecision[] | ListEnumSwipeDecisionFieldRefInput<$PrismaModel>
    notIn?: $Enums.SwipeDecision[] | ListEnumSwipeDecisionFieldRefInput<$PrismaModel>
    not?: NestedEnumSwipeDecisionWithAggregatesFilter<$PrismaModel> | $Enums.SwipeDecision
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSwipeDecisionFilter<$PrismaModel>
    _max?: NestedEnumSwipeDecisionFilter<$PrismaModel>
  }

  export type NestedEnumPlanSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanSource | EnumPlanSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PlanSource[] | ListEnumPlanSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanSource[] | ListEnumPlanSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanSourceFilter<$PrismaModel> | $Enums.PlanSource
  }

  export type NestedEnumPlanSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PlanSource | EnumPlanSourceFieldRefInput<$PrismaModel>
    in?: $Enums.PlanSource[] | ListEnumPlanSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.PlanSource[] | ListEnumPlanSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumPlanSourceWithAggregatesFilter<$PrismaModel> | $Enums.PlanSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPlanSourceFilter<$PrismaModel>
    _max?: NestedEnumPlanSourceFilter<$PrismaModel>
  }

  export type UserPreferencesCreateWithoutUserInput = {
    vegetarian?: boolean
    vegan?: boolean
    pescatarian?: boolean
    halal?: boolean
    kosher?: boolean
    glutenFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    allergies?: UserPreferencesCreateallergiesInput | string[]
    dislikedIngredients?: UserPreferencesCreatedislikedIngredientsInput | string[]
    likedCuisines?: UserPreferencesCreatelikedCuisinesInput | string[]
    dislikedCuisines?: UserPreferencesCreatedislikedCuisinesInput | string[]
    maxPrice?: number | null
    radiusMiles?: number | null
    lunchDays?: UserPreferencesCreatelunchDaysInput | number[]
    updatedAt?: Date | string
  }

  export type UserPreferencesUncheckedCreateWithoutUserInput = {
    vegetarian?: boolean
    vegan?: boolean
    pescatarian?: boolean
    halal?: boolean
    kosher?: boolean
    glutenFree?: boolean
    dairyFree?: boolean
    nutFree?: boolean
    allergies?: UserPreferencesCreateallergiesInput | string[]
    dislikedIngredients?: UserPreferencesCreatedislikedIngredientsInput | string[]
    likedCuisines?: UserPreferencesCreatelikedCuisinesInput | string[]
    dislikedCuisines?: UserPreferencesCreatedislikedCuisinesInput | string[]
    maxPrice?: number | null
    radiusMiles?: number | null
    lunchDays?: UserPreferencesCreatelunchDaysInput | number[]
    updatedAt?: Date | string
  }

  export type UserPreferencesCreateOrConnectWithoutUserInput = {
    where: UserPreferencesWhereUniqueInput
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
  }

  export type MealEventCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    name: string
    source?: $Enums.LunchSource
    placeId?: string | null
    notes?: string | null
    rating?: number | null
    costCents?: number | null
  }

  export type MealEventUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    name: string
    source?: $Enums.LunchSource
    placeId?: string | null
    notes?: string | null
    rating?: number | null
    costCents?: number | null
  }

  export type MealEventCreateOrConnectWithoutUserInput = {
    where: MealEventWhereUniqueInput
    create: XOR<MealEventCreateWithoutUserInput, MealEventUncheckedCreateWithoutUserInput>
  }

  export type MealEventCreateManyUserInputEnvelope = {
    data: MealEventCreateManyUserInput | MealEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SwipeEventCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    suggestion: string
    decision: $Enums.SwipeDecision
    reason?: string | null
  }

  export type SwipeEventUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    suggestion: string
    decision: $Enums.SwipeDecision
    reason?: string | null
  }

  export type SwipeEventCreateOrConnectWithoutUserInput = {
    where: SwipeEventWhereUniqueInput
    create: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput>
  }

  export type SwipeEventCreateManyUserInputEnvelope = {
    data: SwipeEventCreateManyUserInput | SwipeEventCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MealPlanCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weekStart: Date | string
    source?: $Enums.PlanSource
    items?: MealPlanItemCreateNestedManyWithoutPlanInput
  }

  export type MealPlanUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weekStart: Date | string
    source?: $Enums.PlanSource
    items?: MealPlanItemUncheckedCreateNestedManyWithoutPlanInput
  }

  export type MealPlanCreateOrConnectWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput>
  }

  export type MealPlanCreateManyUserInputEnvelope = {
    data: MealPlanCreateManyUserInput | MealPlanCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPreferencesUpsertWithoutUserInput = {
    update: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
    create: XOR<UserPreferencesCreateWithoutUserInput, UserPreferencesUncheckedCreateWithoutUserInput>
    where?: UserPreferencesWhereInput
  }

  export type UserPreferencesUpdateToOneWithWhereWithoutUserInput = {
    where?: UserPreferencesWhereInput
    data: XOR<UserPreferencesUpdateWithoutUserInput, UserPreferencesUncheckedUpdateWithoutUserInput>
  }

  export type UserPreferencesUpdateWithoutUserInput = {
    vegetarian?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    halal?: BoolFieldUpdateOperationsInput | boolean
    kosher?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    dislikedIngredients?: UserPreferencesUpdatedislikedIngredientsInput | string[]
    likedCuisines?: UserPreferencesUpdatelikedCuisinesInput | string[]
    dislikedCuisines?: UserPreferencesUpdatedislikedCuisinesInput | string[]
    maxPrice?: NullableIntFieldUpdateOperationsInput | number | null
    radiusMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    lunchDays?: UserPreferencesUpdatelunchDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserPreferencesUncheckedUpdateWithoutUserInput = {
    vegetarian?: BoolFieldUpdateOperationsInput | boolean
    vegan?: BoolFieldUpdateOperationsInput | boolean
    pescatarian?: BoolFieldUpdateOperationsInput | boolean
    halal?: BoolFieldUpdateOperationsInput | boolean
    kosher?: BoolFieldUpdateOperationsInput | boolean
    glutenFree?: BoolFieldUpdateOperationsInput | boolean
    dairyFree?: BoolFieldUpdateOperationsInput | boolean
    nutFree?: BoolFieldUpdateOperationsInput | boolean
    allergies?: UserPreferencesUpdateallergiesInput | string[]
    dislikedIngredients?: UserPreferencesUpdatedislikedIngredientsInput | string[]
    likedCuisines?: UserPreferencesUpdatelikedCuisinesInput | string[]
    dislikedCuisines?: UserPreferencesUpdatedislikedCuisinesInput | string[]
    maxPrice?: NullableIntFieldUpdateOperationsInput | number | null
    radiusMiles?: NullableFloatFieldUpdateOperationsInput | number | null
    lunchDays?: UserPreferencesUpdatelunchDaysInput | number[]
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MealEventUpsertWithWhereUniqueWithoutUserInput = {
    where: MealEventWhereUniqueInput
    update: XOR<MealEventUpdateWithoutUserInput, MealEventUncheckedUpdateWithoutUserInput>
    create: XOR<MealEventCreateWithoutUserInput, MealEventUncheckedCreateWithoutUserInput>
  }

  export type MealEventUpdateWithWhereUniqueWithoutUserInput = {
    where: MealEventWhereUniqueInput
    data: XOR<MealEventUpdateWithoutUserInput, MealEventUncheckedUpdateWithoutUserInput>
  }

  export type MealEventUpdateManyWithWhereWithoutUserInput = {
    where: MealEventScalarWhereInput
    data: XOR<MealEventUpdateManyMutationInput, MealEventUncheckedUpdateManyWithoutUserInput>
  }

  export type MealEventScalarWhereInput = {
    AND?: MealEventScalarWhereInput | MealEventScalarWhereInput[]
    OR?: MealEventScalarWhereInput[]
    NOT?: MealEventScalarWhereInput | MealEventScalarWhereInput[]
    id?: StringFilter<"MealEvent"> | string
    createdAt?: DateTimeFilter<"MealEvent"> | Date | string
    userId?: StringFilter<"MealEvent"> | string
    date?: DateTimeFilter<"MealEvent"> | Date | string
    name?: StringFilter<"MealEvent"> | string
    source?: EnumLunchSourceFilter<"MealEvent"> | $Enums.LunchSource
    placeId?: StringNullableFilter<"MealEvent"> | string | null
    notes?: StringNullableFilter<"MealEvent"> | string | null
    rating?: IntNullableFilter<"MealEvent"> | number | null
    costCents?: IntNullableFilter<"MealEvent"> | number | null
  }

  export type SwipeEventUpsertWithWhereUniqueWithoutUserInput = {
    where: SwipeEventWhereUniqueInput
    update: XOR<SwipeEventUpdateWithoutUserInput, SwipeEventUncheckedUpdateWithoutUserInput>
    create: XOR<SwipeEventCreateWithoutUserInput, SwipeEventUncheckedCreateWithoutUserInput>
  }

  export type SwipeEventUpdateWithWhereUniqueWithoutUserInput = {
    where: SwipeEventWhereUniqueInput
    data: XOR<SwipeEventUpdateWithoutUserInput, SwipeEventUncheckedUpdateWithoutUserInput>
  }

  export type SwipeEventUpdateManyWithWhereWithoutUserInput = {
    where: SwipeEventScalarWhereInput
    data: XOR<SwipeEventUpdateManyMutationInput, SwipeEventUncheckedUpdateManyWithoutUserInput>
  }

  export type SwipeEventScalarWhereInput = {
    AND?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
    OR?: SwipeEventScalarWhereInput[]
    NOT?: SwipeEventScalarWhereInput | SwipeEventScalarWhereInput[]
    id?: StringFilter<"SwipeEvent"> | string
    createdAt?: DateTimeFilter<"SwipeEvent"> | Date | string
    userId?: StringFilter<"SwipeEvent"> | string
    date?: DateTimeFilter<"SwipeEvent"> | Date | string
    suggestion?: StringFilter<"SwipeEvent"> | string
    decision?: EnumSwipeDecisionFilter<"SwipeEvent"> | $Enums.SwipeDecision
    reason?: StringNullableFilter<"SwipeEvent"> | string | null
  }

  export type MealPlanUpsertWithWhereUniqueWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    update: XOR<MealPlanUpdateWithoutUserInput, MealPlanUncheckedUpdateWithoutUserInput>
    create: XOR<MealPlanCreateWithoutUserInput, MealPlanUncheckedCreateWithoutUserInput>
  }

  export type MealPlanUpdateWithWhereUniqueWithoutUserInput = {
    where: MealPlanWhereUniqueInput
    data: XOR<MealPlanUpdateWithoutUserInput, MealPlanUncheckedUpdateWithoutUserInput>
  }

  export type MealPlanUpdateManyWithWhereWithoutUserInput = {
    where: MealPlanScalarWhereInput
    data: XOR<MealPlanUpdateManyMutationInput, MealPlanUncheckedUpdateManyWithoutUserInput>
  }

  export type MealPlanScalarWhereInput = {
    AND?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
    OR?: MealPlanScalarWhereInput[]
    NOT?: MealPlanScalarWhereInput | MealPlanScalarWhereInput[]
    id?: StringFilter<"MealPlan"> | string
    createdAt?: DateTimeFilter<"MealPlan"> | Date | string
    updatedAt?: DateTimeFilter<"MealPlan"> | Date | string
    userId?: StringFilter<"MealPlan"> | string
    weekStart?: DateTimeFilter<"MealPlan"> | Date | string
    source?: EnumPlanSourceFilter<"MealPlan"> | $Enums.PlanSource
  }

  export type UserCreateWithoutPreferencesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    name?: string | null
    meals?: MealEventCreateNestedManyWithoutUserInput
    swipes?: SwipeEventCreateNestedManyWithoutUserInput
    plans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPreferencesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    name?: string | null
    meals?: MealEventUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
    plans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPreferencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
  }

  export type UserUpsertWithoutPreferencesInput = {
    update: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
    create: XOR<UserCreateWithoutPreferencesInput, UserUncheckedCreateWithoutPreferencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreferencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreferencesInput, UserUncheckedUpdateWithoutPreferencesInput>
  }

  export type UserUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    meals?: MealEventUpdateManyWithoutUserNestedInput
    swipes?: SwipeEventUpdateManyWithoutUserNestedInput
    plans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPreferencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    meals?: MealEventUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
    plans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutMealsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    name?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    swipes?: SwipeEventCreateNestedManyWithoutUserInput
    plans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMealsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    name?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    swipes?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
    plans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMealsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
  }

  export type UserUpsertWithoutMealsInput = {
    update: XOR<UserUpdateWithoutMealsInput, UserUncheckedUpdateWithoutMealsInput>
    create: XOR<UserCreateWithoutMealsInput, UserUncheckedCreateWithoutMealsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMealsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMealsInput, UserUncheckedUpdateWithoutMealsInput>
  }

  export type UserUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    swipes?: SwipeEventUpdateManyWithoutUserNestedInput
    plans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMealsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    swipes?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
    plans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSwipesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    name?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    meals?: MealEventCreateNestedManyWithoutUserInput
    plans?: MealPlanCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSwipesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    name?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    meals?: MealEventUncheckedCreateNestedManyWithoutUserInput
    plans?: MealPlanUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSwipesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
  }

  export type UserUpsertWithoutSwipesInput = {
    update: XOR<UserUpdateWithoutSwipesInput, UserUncheckedUpdateWithoutSwipesInput>
    create: XOR<UserCreateWithoutSwipesInput, UserUncheckedCreateWithoutSwipesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSwipesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSwipesInput, UserUncheckedUpdateWithoutSwipesInput>
  }

  export type UserUpdateWithoutSwipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    meals?: MealEventUpdateManyWithoutUserNestedInput
    plans?: MealPlanUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSwipesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    meals?: MealEventUncheckedUpdateManyWithoutUserNestedInput
    plans?: MealPlanUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutPlansInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    name?: string | null
    preferences?: UserPreferencesCreateNestedOneWithoutUserInput
    meals?: MealEventCreateNestedManyWithoutUserInput
    swipes?: SwipeEventCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlansInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email?: string | null
    name?: string | null
    preferences?: UserPreferencesUncheckedCreateNestedOneWithoutUserInput
    meals?: MealEventUncheckedCreateNestedManyWithoutUserInput
    swipes?: SwipeEventUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlansInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlansInput, UserUncheckedCreateWithoutPlansInput>
  }

  export type MealPlanItemCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    suggestion: string
    source?: $Enums.LunchSource
    overridden?: boolean
  }

  export type MealPlanItemUncheckedCreateWithoutPlanInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    suggestion: string
    source?: $Enums.LunchSource
    overridden?: boolean
  }

  export type MealPlanItemCreateOrConnectWithoutPlanInput = {
    where: MealPlanItemWhereUniqueInput
    create: XOR<MealPlanItemCreateWithoutPlanInput, MealPlanItemUncheckedCreateWithoutPlanInput>
  }

  export type MealPlanItemCreateManyPlanInputEnvelope = {
    data: MealPlanItemCreateManyPlanInput | MealPlanItemCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutPlansInput = {
    update: XOR<UserUpdateWithoutPlansInput, UserUncheckedUpdateWithoutPlansInput>
    create: XOR<UserCreateWithoutPlansInput, UserUncheckedCreateWithoutPlansInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPlansInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPlansInput, UserUncheckedUpdateWithoutPlansInput>
  }

  export type UserUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUpdateOneWithoutUserNestedInput
    meals?: MealEventUpdateManyWithoutUserNestedInput
    swipes?: SwipeEventUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    preferences?: UserPreferencesUncheckedUpdateOneWithoutUserNestedInput
    meals?: MealEventUncheckedUpdateManyWithoutUserNestedInput
    swipes?: SwipeEventUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MealPlanItemUpsertWithWhereUniqueWithoutPlanInput = {
    where: MealPlanItemWhereUniqueInput
    update: XOR<MealPlanItemUpdateWithoutPlanInput, MealPlanItemUncheckedUpdateWithoutPlanInput>
    create: XOR<MealPlanItemCreateWithoutPlanInput, MealPlanItemUncheckedCreateWithoutPlanInput>
  }

  export type MealPlanItemUpdateWithWhereUniqueWithoutPlanInput = {
    where: MealPlanItemWhereUniqueInput
    data: XOR<MealPlanItemUpdateWithoutPlanInput, MealPlanItemUncheckedUpdateWithoutPlanInput>
  }

  export type MealPlanItemUpdateManyWithWhereWithoutPlanInput = {
    where: MealPlanItemScalarWhereInput
    data: XOR<MealPlanItemUpdateManyMutationInput, MealPlanItemUncheckedUpdateManyWithoutPlanInput>
  }

  export type MealPlanItemScalarWhereInput = {
    AND?: MealPlanItemScalarWhereInput | MealPlanItemScalarWhereInput[]
    OR?: MealPlanItemScalarWhereInput[]
    NOT?: MealPlanItemScalarWhereInput | MealPlanItemScalarWhereInput[]
    id?: StringFilter<"MealPlanItem"> | string
    createdAt?: DateTimeFilter<"MealPlanItem"> | Date | string
    planId?: StringFilter<"MealPlanItem"> | string
    date?: DateTimeFilter<"MealPlanItem"> | Date | string
    suggestion?: StringFilter<"MealPlanItem"> | string
    source?: EnumLunchSourceFilter<"MealPlanItem"> | $Enums.LunchSource
    overridden?: BoolFilter<"MealPlanItem"> | boolean
  }

  export type MealPlanCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weekStart: Date | string
    source?: $Enums.PlanSource
    user: UserCreateNestedOneWithoutPlansInput
  }

  export type MealPlanUncheckedCreateWithoutItemsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    weekStart: Date | string
    source?: $Enums.PlanSource
  }

  export type MealPlanCreateOrConnectWithoutItemsInput = {
    where: MealPlanWhereUniqueInput
    create: XOR<MealPlanCreateWithoutItemsInput, MealPlanUncheckedCreateWithoutItemsInput>
  }

  export type MealPlanUpsertWithoutItemsInput = {
    update: XOR<MealPlanUpdateWithoutItemsInput, MealPlanUncheckedUpdateWithoutItemsInput>
    create: XOR<MealPlanCreateWithoutItemsInput, MealPlanUncheckedCreateWithoutItemsInput>
    where?: MealPlanWhereInput
  }

  export type MealPlanUpdateToOneWithWhereWithoutItemsInput = {
    where?: MealPlanWhereInput
    data: XOR<MealPlanUpdateWithoutItemsInput, MealPlanUncheckedUpdateWithoutItemsInput>
  }

  export type MealPlanUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPlanSourceFieldUpdateOperationsInput | $Enums.PlanSource
    user?: UserUpdateOneRequiredWithoutPlansNestedInput
  }

  export type MealPlanUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPlanSourceFieldUpdateOperationsInput | $Enums.PlanSource
  }

  export type MealEventCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    name: string
    source?: $Enums.LunchSource
    placeId?: string | null
    notes?: string | null
    rating?: number | null
    costCents?: number | null
  }

  export type SwipeEventCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    suggestion: string
    decision: $Enums.SwipeDecision
    reason?: string | null
  }

  export type MealPlanCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    weekStart: Date | string
    source?: $Enums.PlanSource
  }

  export type MealEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    costCents?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MealEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    costCents?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MealEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    placeId?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    costCents?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SwipeEventUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    decision?: EnumSwipeDecisionFieldUpdateOperationsInput | $Enums.SwipeDecision
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SwipeEventUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    decision?: EnumSwipeDecisionFieldUpdateOperationsInput | $Enums.SwipeDecision
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SwipeEventUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    decision?: EnumSwipeDecisionFieldUpdateOperationsInput | $Enums.SwipeDecision
    reason?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MealPlanUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPlanSourceFieldUpdateOperationsInput | $Enums.PlanSource
    items?: MealPlanItemUpdateManyWithoutPlanNestedInput
  }

  export type MealPlanUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPlanSourceFieldUpdateOperationsInput | $Enums.PlanSource
    items?: MealPlanItemUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type MealPlanUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    source?: EnumPlanSourceFieldUpdateOperationsInput | $Enums.PlanSource
  }

  export type MealPlanItemCreateManyPlanInput = {
    id?: string
    createdAt?: Date | string
    date: Date | string
    suggestion: string
    source?: $Enums.LunchSource
    overridden?: boolean
  }

  export type MealPlanItemUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    overridden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MealPlanItemUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    overridden?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MealPlanItemUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    suggestion?: StringFieldUpdateOperationsInput | string
    source?: EnumLunchSourceFieldUpdateOperationsInput | $Enums.LunchSource
    overridden?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}