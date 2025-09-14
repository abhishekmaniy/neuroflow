
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
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model MindMap
 * 
 */
export type MindMap = $Result.DefaultSelection<Prisma.$MindMapPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Team
 * 
 */
export type Team = $Result.DefaultSelection<Prisma.$TeamPayload>
/**
 * Model TeamMember
 * 
 */
export type TeamMember = $Result.DefaultSelection<Prisma.$TeamMemberPayload>
/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model Flowchart
 * 
 */
export type Flowchart = $Result.DefaultSelection<Prisma.$FlowchartPayload>
/**
 * Model Whiteboard
 * 
 */
export type Whiteboard = $Result.DefaultSelection<Prisma.$WhiteboardPayload>
/**
 * Model Node
 * 
 */
export type Node = $Result.DefaultSelection<Prisma.$NodePayload>
/**
 * Model SubscriptionPlan
 * 
 */
export type SubscriptionPlan = $Result.DefaultSelection<Prisma.$SubscriptionPlanPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserSubscription
 * 
 */
export type UserSubscription = $Result.DefaultSelection<Prisma.$UserSubscriptionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TeamRole: {
  OWNER: 'OWNER',
  ADMIN: 'ADMIN',
  MEMBER: 'MEMBER'
};

export type TeamRole = (typeof TeamRole)[keyof typeof TeamRole]


export const Direction: {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT',
  TOP: 'TOP',
  DOWN: 'DOWN'
};

export type Direction = (typeof Direction)[keyof typeof Direction]


export const NodeSource: {
  AI: 'AI',
  USER: 'USER'
};

export type NodeSource = (typeof NodeSource)[keyof typeof NodeSource]


export const GeneratedBy: {
  MANUAL: 'MANUAL',
  AI: 'AI'
};

export type GeneratedBy = (typeof GeneratedBy)[keyof typeof GeneratedBy]


export const Role: {
  USER: 'USER',
  ASSISTANT: 'ASSISTANT'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type TeamRole = $Enums.TeamRole

export const TeamRole: typeof $Enums.TeamRole

export type Direction = $Enums.Direction

export const Direction: typeof $Enums.Direction

export type NodeSource = $Enums.NodeSource

export const NodeSource: typeof $Enums.NodeSource

export type GeneratedBy = $Enums.GeneratedBy

export const GeneratedBy: typeof $Enums.GeneratedBy

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Messages
 * const messages = await prisma.message.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Messages
   * const messages = await prisma.message.findMany()
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mindMap`: Exposes CRUD operations for the **MindMap** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MindMaps
    * const mindMaps = await prisma.mindMap.findMany()
    * ```
    */
  get mindMap(): Prisma.MindMapDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.team`: Exposes CRUD operations for the **Team** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teams
    * const teams = await prisma.team.findMany()
    * ```
    */
  get team(): Prisma.TeamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.teamMember`: Exposes CRUD operations for the **TeamMember** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeamMembers
    * const teamMembers = await prisma.teamMember.findMany()
    * ```
    */
  get teamMember(): Prisma.TeamMemberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flowchart`: Exposes CRUD operations for the **Flowchart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flowcharts
    * const flowcharts = await prisma.flowchart.findMany()
    * ```
    */
  get flowchart(): Prisma.FlowchartDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.whiteboard`: Exposes CRUD operations for the **Whiteboard** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Whiteboards
    * const whiteboards = await prisma.whiteboard.findMany()
    * ```
    */
  get whiteboard(): Prisma.WhiteboardDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.node`: Exposes CRUD operations for the **Node** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nodes
    * const nodes = await prisma.node.findMany()
    * ```
    */
  get node(): Prisma.NodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscriptionPlan`: Exposes CRUD operations for the **SubscriptionPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubscriptionPlans
    * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
    * ```
    */
  get subscriptionPlan(): Prisma.SubscriptionPlanDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.userSubscription`: Exposes CRUD operations for the **UserSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserSubscriptions
    * const userSubscriptions = await prisma.userSubscription.findMany()
    * ```
    */
  get userSubscription(): Prisma.UserSubscriptionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Message: 'Message',
    MindMap: 'MindMap',
    Chat: 'Chat',
    Team: 'Team',
    TeamMember: 'TeamMember',
    Workspace: 'Workspace',
    Flowchart: 'Flowchart',
    Whiteboard: 'Whiteboard',
    Node: 'Node',
    SubscriptionPlan: 'SubscriptionPlan',
    User: 'User',
    UserSubscription: 'UserSubscription'
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
      modelProps: "message" | "mindMap" | "chat" | "team" | "teamMember" | "workspace" | "flowchart" | "whiteboard" | "node" | "subscriptionPlan" | "user" | "userSubscription"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      MindMap: {
        payload: Prisma.$MindMapPayload<ExtArgs>
        fields: Prisma.MindMapFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MindMapFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MindMapPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MindMapFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MindMapPayload>
          }
          findFirst: {
            args: Prisma.MindMapFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MindMapPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MindMapFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MindMapPayload>
          }
          findMany: {
            args: Prisma.MindMapFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MindMapPayload>[]
          }
          create: {
            args: Prisma.MindMapCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MindMapPayload>
          }
          createMany: {
            args: Prisma.MindMapCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MindMapCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MindMapPayload>[]
          }
          delete: {
            args: Prisma.MindMapDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MindMapPayload>
          }
          update: {
            args: Prisma.MindMapUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MindMapPayload>
          }
          deleteMany: {
            args: Prisma.MindMapDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MindMapUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MindMapUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MindMapPayload>[]
          }
          upsert: {
            args: Prisma.MindMapUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MindMapPayload>
          }
          aggregate: {
            args: Prisma.MindMapAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMindMap>
          }
          groupBy: {
            args: Prisma.MindMapGroupByArgs<ExtArgs>
            result: $Utils.Optional<MindMapGroupByOutputType>[]
          }
          count: {
            args: Prisma.MindMapCountArgs<ExtArgs>
            result: $Utils.Optional<MindMapCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Team: {
        payload: Prisma.$TeamPayload<ExtArgs>
        fields: Prisma.TeamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findFirst: {
            args: Prisma.TeamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          findMany: {
            args: Prisma.TeamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          create: {
            args: Prisma.TeamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          createMany: {
            args: Prisma.TeamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          delete: {
            args: Prisma.TeamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          update: {
            args: Prisma.TeamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          deleteMany: {
            args: Prisma.TeamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>[]
          }
          upsert: {
            args: Prisma.TeamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamPayload>
          }
          aggregate: {
            args: Prisma.TeamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeam>
          }
          groupBy: {
            args: Prisma.TeamGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamCountArgs<ExtArgs>
            result: $Utils.Optional<TeamCountAggregateOutputType> | number
          }
        }
      }
      TeamMember: {
        payload: Prisma.$TeamMemberPayload<ExtArgs>
        fields: Prisma.TeamMemberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeamMemberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeamMemberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findFirst: {
            args: Prisma.TeamMemberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeamMemberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          findMany: {
            args: Prisma.TeamMemberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          create: {
            args: Prisma.TeamMemberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          createMany: {
            args: Prisma.TeamMemberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeamMemberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          delete: {
            args: Prisma.TeamMemberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          update: {
            args: Prisma.TeamMemberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          deleteMany: {
            args: Prisma.TeamMemberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeamMemberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TeamMemberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>[]
          }
          upsert: {
            args: Prisma.TeamMemberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeamMemberPayload>
          }
          aggregate: {
            args: Prisma.TeamMemberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeamMember>
          }
          groupBy: {
            args: Prisma.TeamMemberGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeamMemberCountArgs<ExtArgs>
            result: $Utils.Optional<TeamMemberCountAggregateOutputType> | number
          }
        }
      }
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkspaceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
      Flowchart: {
        payload: Prisma.$FlowchartPayload<ExtArgs>
        fields: Prisma.FlowchartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlowchartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlowchartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          findFirst: {
            args: Prisma.FlowchartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlowchartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          findMany: {
            args: Prisma.FlowchartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>[]
          }
          create: {
            args: Prisma.FlowchartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          createMany: {
            args: Prisma.FlowchartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FlowchartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>[]
          }
          delete: {
            args: Prisma.FlowchartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          update: {
            args: Prisma.FlowchartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          deleteMany: {
            args: Prisma.FlowchartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlowchartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FlowchartUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>[]
          }
          upsert: {
            args: Prisma.FlowchartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlowchartPayload>
          }
          aggregate: {
            args: Prisma.FlowchartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlowchart>
          }
          groupBy: {
            args: Prisma.FlowchartGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlowchartGroupByOutputType>[]
          }
          count: {
            args: Prisma.FlowchartCountArgs<ExtArgs>
            result: $Utils.Optional<FlowchartCountAggregateOutputType> | number
          }
        }
      }
      Whiteboard: {
        payload: Prisma.$WhiteboardPayload<ExtArgs>
        fields: Prisma.WhiteboardFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WhiteboardFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WhiteboardFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          findFirst: {
            args: Prisma.WhiteboardFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WhiteboardFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          findMany: {
            args: Prisma.WhiteboardFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>[]
          }
          create: {
            args: Prisma.WhiteboardCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          createMany: {
            args: Prisma.WhiteboardCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WhiteboardCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>[]
          }
          delete: {
            args: Prisma.WhiteboardDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          update: {
            args: Prisma.WhiteboardUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          deleteMany: {
            args: Prisma.WhiteboardDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WhiteboardUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WhiteboardUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>[]
          }
          upsert: {
            args: Prisma.WhiteboardUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WhiteboardPayload>
          }
          aggregate: {
            args: Prisma.WhiteboardAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWhiteboard>
          }
          groupBy: {
            args: Prisma.WhiteboardGroupByArgs<ExtArgs>
            result: $Utils.Optional<WhiteboardGroupByOutputType>[]
          }
          count: {
            args: Prisma.WhiteboardCountArgs<ExtArgs>
            result: $Utils.Optional<WhiteboardCountAggregateOutputType> | number
          }
        }
      }
      Node: {
        payload: Prisma.$NodePayload<ExtArgs>
        fields: Prisma.NodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findFirst: {
            args: Prisma.NodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findMany: {
            args: Prisma.NodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          create: {
            args: Prisma.NodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          createMany: {
            args: Prisma.NodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          delete: {
            args: Prisma.NodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          update: {
            args: Prisma.NodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          deleteMany: {
            args: Prisma.NodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          upsert: {
            args: Prisma.NodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          aggregate: {
            args: Prisma.NodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNode>
          }
          groupBy: {
            args: Prisma.NodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodeCountArgs<ExtArgs>
            result: $Utils.Optional<NodeCountAggregateOutputType> | number
          }
        }
      }
      SubscriptionPlan: {
        payload: Prisma.$SubscriptionPlanPayload<ExtArgs>
        fields: Prisma.SubscriptionPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          findMany: {
            args: Prisma.SubscriptionPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          create: {
            args: Prisma.SubscriptionPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          createMany: {
            args: Prisma.SubscriptionPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          delete: {
            args: Prisma.SubscriptionPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          update: {
            args: Prisma.SubscriptionPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>[]
          }
          upsert: {
            args: Prisma.SubscriptionPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPlanPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscriptionPlan>
          }
          groupBy: {
            args: Prisma.SubscriptionPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubscriptionPlanCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionPlanCountAggregateOutputType> | number
          }
        }
      }
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
      UserSubscription: {
        payload: Prisma.$UserSubscriptionPayload<ExtArgs>
        fields: Prisma.UserSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.UserSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          findMany: {
            args: Prisma.UserSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          create: {
            args: Prisma.UserSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          createMany: {
            args: Prisma.UserSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.UserSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          update: {
            args: Prisma.UserSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.UserSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.UserSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.UserSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserSubscription>
          }
          groupBy: {
            args: Prisma.UserSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<UserSubscriptionCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
    message?: MessageOmit
    mindMap?: MindMapOmit
    chat?: ChatOmit
    team?: TeamOmit
    teamMember?: TeamMemberOmit
    workspace?: WorkspaceOmit
    flowchart?: FlowchartOmit
    whiteboard?: WhiteboardOmit
    node?: NodeOmit
    subscriptionPlan?: SubscriptionPlanOmit
    user?: UserOmit
    userSubscription?: UserSubscriptionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type MindMapCountOutputType
   */

  export type MindMapCountOutputType = {
    nodes: number
  }

  export type MindMapCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | MindMapCountOutputTypeCountNodesArgs
  }

  // Custom InputTypes
  /**
   * MindMapCountOutputType without action
   */
  export type MindMapCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMapCountOutputType
     */
    select?: MindMapCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MindMapCountOutputType without action
   */
  export type MindMapCountOutputTypeCountNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    Message: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Message?: boolean | ChatCountOutputTypeCountMessageArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type TeamCountOutputType
   */

  export type TeamCountOutputType = {
    members: number
  }

  export type TeamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | TeamCountOutputTypeCountMembersArgs
  }

  // Custom InputTypes
  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamCountOutputType
     */
    select?: TeamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeamCountOutputType without action
   */
  export type TeamCountOutputTypeCountMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }


  /**
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    teams: number
    mindmaps: number
    flowcharts: number
    whiteboards: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | WorkspaceCountOutputTypeCountTeamsArgs
    mindmaps?: boolean | WorkspaceCountOutputTypeCountMindmapsArgs
    flowcharts?: boolean | WorkspaceCountOutputTypeCountFlowchartsArgs
    whiteboards?: boolean | WorkspaceCountOutputTypeCountWhiteboardsArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountTeamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountMindmapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MindMapWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountFlowchartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowchartWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountWhiteboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhiteboardWhereInput
  }


  /**
   * Count Type NodeCountOutputType
   */

  export type NodeCountOutputType = {
    children: number
  }

  export type NodeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | NodeCountOutputTypeCountChildrenArgs
  }

  // Custom InputTypes
  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NodeCountOutputType
     */
    select?: NodeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NodeCountOutputType without action
   */
  export type NodeCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
  }


  /**
   * Count Type SubscriptionPlanCountOutputType
   */

  export type SubscriptionPlanCountOutputType = {
    UserSubscription: number
  }

  export type SubscriptionPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserSubscription?: boolean | SubscriptionPlanCountOutputTypeCountUserSubscriptionArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlanCountOutputType
     */
    select?: SubscriptionPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionPlanCountOutputType without action
   */
  export type SubscriptionPlanCountOutputTypeCountUserSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Chat: number
    MindMap: number
    TeamMember: number
    workspace: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | UserCountOutputTypeCountChatArgs
    MindMap?: boolean | UserCountOutputTypeCountMindMapArgs
    TeamMember?: boolean | UserCountOutputTypeCountTeamMemberArgs
    workspace?: boolean | UserCountOutputTypeCountWorkspaceArgs
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
  export type UserCountOutputTypeCountChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMindMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MindMapWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWorkspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    chatId: string | null
    role: $Enums.Role | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    chatId: string | null
    role: $Enums.Role | null
    content: string | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    chatId: number
    role: number
    content: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    chatId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    chatId?: true
    role?: true
    content?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    chatId?: true
    role?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    chatId: string
    role: $Enums.Role
    content: string
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    chatId?: boolean
    role?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "chatId" | "role" | "content" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      Chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatId: string
      role: $Enums.Role
      content: string
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
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
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly chatId: FieldRef<"Message", 'String'>
    readonly role: FieldRef<"Message", 'Role'>
    readonly content: FieldRef<"Message", 'String'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model MindMap
   */

  export type AggregateMindMap = {
    _count: MindMapCountAggregateOutputType | null
    _min: MindMapMinAggregateOutputType | null
    _max: MindMapMaxAggregateOutputType | null
  }

  export type MindMapMinAggregateOutputType = {
    id: string | null
    title: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    isPublic: boolean | null
    generatedBy: $Enums.GeneratedBy | null
    chatId: string | null
  }

  export type MindMapMaxAggregateOutputType = {
    id: string | null
    title: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    isPublic: boolean | null
    generatedBy: $Enums.GeneratedBy | null
    chatId: string | null
  }

  export type MindMapCountAggregateOutputType = {
    id: number
    title: number
    workspaceId: number
    createdAt: number
    updatedAt: number
    userId: number
    isPublic: number
    generatedBy: number
    chatId: number
    _all: number
  }


  export type MindMapMinAggregateInputType = {
    id?: true
    title?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    isPublic?: true
    generatedBy?: true
    chatId?: true
  }

  export type MindMapMaxAggregateInputType = {
    id?: true
    title?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    isPublic?: true
    generatedBy?: true
    chatId?: true
  }

  export type MindMapCountAggregateInputType = {
    id?: true
    title?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    isPublic?: true
    generatedBy?: true
    chatId?: true
    _all?: true
  }

  export type MindMapAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MindMap to aggregate.
     */
    where?: MindMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MindMaps to fetch.
     */
    orderBy?: MindMapOrderByWithRelationInput | MindMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MindMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MindMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MindMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MindMaps
    **/
    _count?: true | MindMapCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MindMapMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MindMapMaxAggregateInputType
  }

  export type GetMindMapAggregateType<T extends MindMapAggregateArgs> = {
        [P in keyof T & keyof AggregateMindMap]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMindMap[P]>
      : GetScalarType<T[P], AggregateMindMap[P]>
  }




  export type MindMapGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MindMapWhereInput
    orderBy?: MindMapOrderByWithAggregationInput | MindMapOrderByWithAggregationInput[]
    by: MindMapScalarFieldEnum[] | MindMapScalarFieldEnum
    having?: MindMapScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MindMapCountAggregateInputType | true
    _min?: MindMapMinAggregateInputType
    _max?: MindMapMaxAggregateInputType
  }

  export type MindMapGroupByOutputType = {
    id: string
    title: string
    workspaceId: string
    createdAt: Date
    updatedAt: Date
    userId: string
    isPublic: boolean
    generatedBy: $Enums.GeneratedBy
    chatId: string | null
    _count: MindMapCountAggregateOutputType | null
    _min: MindMapMinAggregateOutputType | null
    _max: MindMapMaxAggregateOutputType | null
  }

  type GetMindMapGroupByPayload<T extends MindMapGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MindMapGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MindMapGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MindMapGroupByOutputType[P]>
            : GetScalarType<T[P], MindMapGroupByOutputType[P]>
        }
      >
    >


  export type MindMapSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    isPublic?: boolean
    generatedBy?: boolean
    chatId?: boolean
    Chat?: boolean | MindMap$ChatArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    nodes?: boolean | MindMap$nodesArgs<ExtArgs>
    _count?: boolean | MindMapCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mindMap"]>

  export type MindMapSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    isPublic?: boolean
    generatedBy?: boolean
    chatId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mindMap"]>

  export type MindMapSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    isPublic?: boolean
    generatedBy?: boolean
    chatId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mindMap"]>

  export type MindMapSelectScalar = {
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    isPublic?: boolean
    generatedBy?: boolean
    chatId?: boolean
  }

  export type MindMapOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "workspaceId" | "createdAt" | "updatedAt" | "userId" | "isPublic" | "generatedBy" | "chatId", ExtArgs["result"]["mindMap"]>
  export type MindMapInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | MindMap$ChatArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
    nodes?: boolean | MindMap$nodesArgs<ExtArgs>
    _count?: boolean | MindMapCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MindMapIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MindMapIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MindMapPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MindMap"
    objects: {
      Chat: Prisma.$ChatPayload<ExtArgs> | null
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
      nodes: Prisma.$NodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      workspaceId: string
      createdAt: Date
      updatedAt: Date
      userId: string
      isPublic: boolean
      generatedBy: $Enums.GeneratedBy
      chatId: string | null
    }, ExtArgs["result"]["mindMap"]>
    composites: {}
  }

  type MindMapGetPayload<S extends boolean | null | undefined | MindMapDefaultArgs> = $Result.GetResult<Prisma.$MindMapPayload, S>

  type MindMapCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MindMapFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MindMapCountAggregateInputType | true
    }

  export interface MindMapDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MindMap'], meta: { name: 'MindMap' } }
    /**
     * Find zero or one MindMap that matches the filter.
     * @param {MindMapFindUniqueArgs} args - Arguments to find a MindMap
     * @example
     * // Get one MindMap
     * const mindMap = await prisma.mindMap.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MindMapFindUniqueArgs>(args: SelectSubset<T, MindMapFindUniqueArgs<ExtArgs>>): Prisma__MindMapClient<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MindMap that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MindMapFindUniqueOrThrowArgs} args - Arguments to find a MindMap
     * @example
     * // Get one MindMap
     * const mindMap = await prisma.mindMap.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MindMapFindUniqueOrThrowArgs>(args: SelectSubset<T, MindMapFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MindMapClient<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MindMap that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MindMapFindFirstArgs} args - Arguments to find a MindMap
     * @example
     * // Get one MindMap
     * const mindMap = await prisma.mindMap.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MindMapFindFirstArgs>(args?: SelectSubset<T, MindMapFindFirstArgs<ExtArgs>>): Prisma__MindMapClient<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MindMap that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MindMapFindFirstOrThrowArgs} args - Arguments to find a MindMap
     * @example
     * // Get one MindMap
     * const mindMap = await prisma.mindMap.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MindMapFindFirstOrThrowArgs>(args?: SelectSubset<T, MindMapFindFirstOrThrowArgs<ExtArgs>>): Prisma__MindMapClient<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MindMaps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MindMapFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MindMaps
     * const mindMaps = await prisma.mindMap.findMany()
     * 
     * // Get first 10 MindMaps
     * const mindMaps = await prisma.mindMap.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mindMapWithIdOnly = await prisma.mindMap.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MindMapFindManyArgs>(args?: SelectSubset<T, MindMapFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MindMap.
     * @param {MindMapCreateArgs} args - Arguments to create a MindMap.
     * @example
     * // Create one MindMap
     * const MindMap = await prisma.mindMap.create({
     *   data: {
     *     // ... data to create a MindMap
     *   }
     * })
     * 
     */
    create<T extends MindMapCreateArgs>(args: SelectSubset<T, MindMapCreateArgs<ExtArgs>>): Prisma__MindMapClient<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MindMaps.
     * @param {MindMapCreateManyArgs} args - Arguments to create many MindMaps.
     * @example
     * // Create many MindMaps
     * const mindMap = await prisma.mindMap.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MindMapCreateManyArgs>(args?: SelectSubset<T, MindMapCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MindMaps and returns the data saved in the database.
     * @param {MindMapCreateManyAndReturnArgs} args - Arguments to create many MindMaps.
     * @example
     * // Create many MindMaps
     * const mindMap = await prisma.mindMap.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MindMaps and only return the `id`
     * const mindMapWithIdOnly = await prisma.mindMap.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MindMapCreateManyAndReturnArgs>(args?: SelectSubset<T, MindMapCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MindMap.
     * @param {MindMapDeleteArgs} args - Arguments to delete one MindMap.
     * @example
     * // Delete one MindMap
     * const MindMap = await prisma.mindMap.delete({
     *   where: {
     *     // ... filter to delete one MindMap
     *   }
     * })
     * 
     */
    delete<T extends MindMapDeleteArgs>(args: SelectSubset<T, MindMapDeleteArgs<ExtArgs>>): Prisma__MindMapClient<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MindMap.
     * @param {MindMapUpdateArgs} args - Arguments to update one MindMap.
     * @example
     * // Update one MindMap
     * const mindMap = await prisma.mindMap.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MindMapUpdateArgs>(args: SelectSubset<T, MindMapUpdateArgs<ExtArgs>>): Prisma__MindMapClient<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MindMaps.
     * @param {MindMapDeleteManyArgs} args - Arguments to filter MindMaps to delete.
     * @example
     * // Delete a few MindMaps
     * const { count } = await prisma.mindMap.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MindMapDeleteManyArgs>(args?: SelectSubset<T, MindMapDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MindMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MindMapUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MindMaps
     * const mindMap = await prisma.mindMap.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MindMapUpdateManyArgs>(args: SelectSubset<T, MindMapUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MindMaps and returns the data updated in the database.
     * @param {MindMapUpdateManyAndReturnArgs} args - Arguments to update many MindMaps.
     * @example
     * // Update many MindMaps
     * const mindMap = await prisma.mindMap.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MindMaps and only return the `id`
     * const mindMapWithIdOnly = await prisma.mindMap.updateManyAndReturn({
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
    updateManyAndReturn<T extends MindMapUpdateManyAndReturnArgs>(args: SelectSubset<T, MindMapUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MindMap.
     * @param {MindMapUpsertArgs} args - Arguments to update or create a MindMap.
     * @example
     * // Update or create a MindMap
     * const mindMap = await prisma.mindMap.upsert({
     *   create: {
     *     // ... data to create a MindMap
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MindMap we want to update
     *   }
     * })
     */
    upsert<T extends MindMapUpsertArgs>(args: SelectSubset<T, MindMapUpsertArgs<ExtArgs>>): Prisma__MindMapClient<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MindMaps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MindMapCountArgs} args - Arguments to filter MindMaps to count.
     * @example
     * // Count the number of MindMaps
     * const count = await prisma.mindMap.count({
     *   where: {
     *     // ... the filter for the MindMaps we want to count
     *   }
     * })
    **/
    count<T extends MindMapCountArgs>(
      args?: Subset<T, MindMapCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MindMapCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MindMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MindMapAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MindMapAggregateArgs>(args: Subset<T, MindMapAggregateArgs>): Prisma.PrismaPromise<GetMindMapAggregateType<T>>

    /**
     * Group by MindMap.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MindMapGroupByArgs} args - Group by arguments.
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
      T extends MindMapGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MindMapGroupByArgs['orderBy'] }
        : { orderBy?: MindMapGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MindMapGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMindMapGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MindMap model
   */
  readonly fields: MindMapFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MindMap.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MindMapClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Chat<T extends MindMap$ChatArgs<ExtArgs> = {}>(args?: Subset<T, MindMap$ChatArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nodes<T extends MindMap$nodesArgs<ExtArgs> = {}>(args?: Subset<T, MindMap$nodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the MindMap model
   */
  interface MindMapFieldRefs {
    readonly id: FieldRef<"MindMap", 'String'>
    readonly title: FieldRef<"MindMap", 'String'>
    readonly workspaceId: FieldRef<"MindMap", 'String'>
    readonly createdAt: FieldRef<"MindMap", 'DateTime'>
    readonly updatedAt: FieldRef<"MindMap", 'DateTime'>
    readonly userId: FieldRef<"MindMap", 'String'>
    readonly isPublic: FieldRef<"MindMap", 'Boolean'>
    readonly generatedBy: FieldRef<"MindMap", 'GeneratedBy'>
    readonly chatId: FieldRef<"MindMap", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MindMap findUnique
   */
  export type MindMapFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
    /**
     * Filter, which MindMap to fetch.
     */
    where: MindMapWhereUniqueInput
  }

  /**
   * MindMap findUniqueOrThrow
   */
  export type MindMapFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
    /**
     * Filter, which MindMap to fetch.
     */
    where: MindMapWhereUniqueInput
  }

  /**
   * MindMap findFirst
   */
  export type MindMapFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
    /**
     * Filter, which MindMap to fetch.
     */
    where?: MindMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MindMaps to fetch.
     */
    orderBy?: MindMapOrderByWithRelationInput | MindMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MindMaps.
     */
    cursor?: MindMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MindMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MindMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MindMaps.
     */
    distinct?: MindMapScalarFieldEnum | MindMapScalarFieldEnum[]
  }

  /**
   * MindMap findFirstOrThrow
   */
  export type MindMapFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
    /**
     * Filter, which MindMap to fetch.
     */
    where?: MindMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MindMaps to fetch.
     */
    orderBy?: MindMapOrderByWithRelationInput | MindMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MindMaps.
     */
    cursor?: MindMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MindMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MindMaps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MindMaps.
     */
    distinct?: MindMapScalarFieldEnum | MindMapScalarFieldEnum[]
  }

  /**
   * MindMap findMany
   */
  export type MindMapFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
    /**
     * Filter, which MindMaps to fetch.
     */
    where?: MindMapWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MindMaps to fetch.
     */
    orderBy?: MindMapOrderByWithRelationInput | MindMapOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MindMaps.
     */
    cursor?: MindMapWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MindMaps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MindMaps.
     */
    skip?: number
    distinct?: MindMapScalarFieldEnum | MindMapScalarFieldEnum[]
  }

  /**
   * MindMap create
   */
  export type MindMapCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
    /**
     * The data needed to create a MindMap.
     */
    data: XOR<MindMapCreateInput, MindMapUncheckedCreateInput>
  }

  /**
   * MindMap createMany
   */
  export type MindMapCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MindMaps.
     */
    data: MindMapCreateManyInput | MindMapCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MindMap createManyAndReturn
   */
  export type MindMapCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * The data used to create many MindMaps.
     */
    data: MindMapCreateManyInput | MindMapCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MindMap update
   */
  export type MindMapUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
    /**
     * The data needed to update a MindMap.
     */
    data: XOR<MindMapUpdateInput, MindMapUncheckedUpdateInput>
    /**
     * Choose, which MindMap to update.
     */
    where: MindMapWhereUniqueInput
  }

  /**
   * MindMap updateMany
   */
  export type MindMapUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MindMaps.
     */
    data: XOR<MindMapUpdateManyMutationInput, MindMapUncheckedUpdateManyInput>
    /**
     * Filter which MindMaps to update
     */
    where?: MindMapWhereInput
    /**
     * Limit how many MindMaps to update.
     */
    limit?: number
  }

  /**
   * MindMap updateManyAndReturn
   */
  export type MindMapUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * The data used to update MindMaps.
     */
    data: XOR<MindMapUpdateManyMutationInput, MindMapUncheckedUpdateManyInput>
    /**
     * Filter which MindMaps to update
     */
    where?: MindMapWhereInput
    /**
     * Limit how many MindMaps to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MindMap upsert
   */
  export type MindMapUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
    /**
     * The filter to search for the MindMap to update in case it exists.
     */
    where: MindMapWhereUniqueInput
    /**
     * In case the MindMap found by the `where` argument doesn't exist, create a new MindMap with this data.
     */
    create: XOR<MindMapCreateInput, MindMapUncheckedCreateInput>
    /**
     * In case the MindMap was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MindMapUpdateInput, MindMapUncheckedUpdateInput>
  }

  /**
   * MindMap delete
   */
  export type MindMapDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
    /**
     * Filter which MindMap to delete.
     */
    where: MindMapWhereUniqueInput
  }

  /**
   * MindMap deleteMany
   */
  export type MindMapDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MindMaps to delete
     */
    where?: MindMapWhereInput
    /**
     * Limit how many MindMaps to delete.
     */
    limit?: number
  }

  /**
   * MindMap.Chat
   */
  export type MindMap$ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
  }

  /**
   * MindMap.nodes
   */
  export type MindMap$nodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    cursor?: NodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * MindMap without action
   */
  export type MindMapDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
    userId: string | null
    mindMapId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    mindMapId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    userId: number
    mindMapId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
    userId?: true
    mindMapId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
    userId?: true
    mindMapId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    userId?: true
    mindMapId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    userId: string | null
    mindMapId: string
    createdAt: Date
    updatedAt: Date
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mindMapId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | Chat$UserArgs<ExtArgs>
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
    Message?: boolean | Chat$MessageArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mindMapId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | Chat$UserArgs<ExtArgs>
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    mindMapId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | Chat$UserArgs<ExtArgs>
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
    userId?: boolean
    mindMapId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChatOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "mindMapId" | "createdAt" | "updatedAt", ExtArgs["result"]["chat"]>
  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Chat$UserArgs<ExtArgs>
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
    Message?: boolean | Chat$MessageArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Chat$UserArgs<ExtArgs>
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
  }
  export type ChatIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Chat$UserArgs<ExtArgs>
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
  }

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      User: Prisma.$UserPayload<ExtArgs> | null
      mindMap: Prisma.$MindMapPayload<ExtArgs>
      Message: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      mindMapId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats and returns the data updated in the database.
     * @param {ChatUpdateManyAndReturnArgs} args - Arguments to update many Chats.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.updateManyAndReturn({
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
    updateManyAndReturn<T extends ChatUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
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
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends Chat$UserArgs<ExtArgs> = {}>(args?: Subset<T, Chat$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    mindMap<T extends MindMapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MindMapDefaultArgs<ExtArgs>>): Prisma__MindMapClient<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Message<T extends Chat$MessageArgs<ExtArgs> = {}>(args?: Subset<T, Chat$MessageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Chat model
   */
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
    readonly userId: FieldRef<"Chat", 'String'>
    readonly mindMapId: FieldRef<"Chat", 'String'>
    readonly createdAt: FieldRef<"Chat", 'DateTime'>
    readonly updatedAt: FieldRef<"Chat", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
  }

  /**
   * Chat updateManyAndReturn
   */
  export type ChatUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
    /**
     * Limit how many Chats to delete.
     */
    limit?: number
  }

  /**
   * Chat.User
   */
  export type Chat$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Chat.Message
   */
  export type Chat$MessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Team
   */

  export type AggregateTeam = {
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  export type TeamMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    workspaceId: string | null
  }

  export type TeamMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    workspaceId: string | null
  }

  export type TeamCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    workspaceId: number
    _all: number
  }


  export type TeamMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
  }

  export type TeamMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
  }

  export type TeamCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    workspaceId?: true
    _all?: true
  }

  export type TeamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Team to aggregate.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teams
    **/
    _count?: true | TeamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMaxAggregateInputType
  }

  export type GetTeamAggregateType<T extends TeamAggregateArgs> = {
        [P in keyof T & keyof AggregateTeam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeam[P]>
      : GetScalarType<T[P], AggregateTeam[P]>
  }




  export type TeamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithAggregationInput | TeamOrderByWithAggregationInput[]
    by: TeamScalarFieldEnum[] | TeamScalarFieldEnum
    having?: TeamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamCountAggregateInputType | true
    _min?: TeamMinAggregateInputType
    _max?: TeamMaxAggregateInputType
  }

  export type TeamGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    workspaceId: string
    _count: TeamCountAggregateOutputType | null
    _min: TeamMinAggregateOutputType | null
    _max: TeamMaxAggregateOutputType | null
  }

  type GetTeamGroupByPayload<T extends TeamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamGroupByOutputType[P]>
            : GetScalarType<T[P], TeamGroupByOutputType[P]>
        }
      >
    >


  export type TeamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaceId?: boolean
    members?: boolean | Team$membersArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["team"]>

  export type TeamSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspaceId?: boolean
  }

  export type TeamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "workspaceId", ExtArgs["result"]["team"]>
  export type TeamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    members?: boolean | Team$membersArgs<ExtArgs>
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    _count?: boolean | TeamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type TeamIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $TeamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Team"
    objects: {
      members: Prisma.$TeamMemberPayload<ExtArgs>[]
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      workspaceId: string
    }, ExtArgs["result"]["team"]>
    composites: {}
  }

  type TeamGetPayload<S extends boolean | null | undefined | TeamDefaultArgs> = $Result.GetResult<Prisma.$TeamPayload, S>

  type TeamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamCountAggregateInputType | true
    }

  export interface TeamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Team'], meta: { name: 'Team' } }
    /**
     * Find zero or one Team that matches the filter.
     * @param {TeamFindUniqueArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamFindUniqueArgs>(args: SelectSubset<T, TeamFindUniqueArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Team that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamFindUniqueOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamFindFirstArgs>(args?: SelectSubset<T, TeamFindFirstArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Team that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindFirstOrThrowArgs} args - Arguments to find a Team
     * @example
     * // Get one Team
     * const team = await prisma.team.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Teams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teams
     * const teams = await prisma.team.findMany()
     * 
     * // Get first 10 Teams
     * const teams = await prisma.team.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamWithIdOnly = await prisma.team.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamFindManyArgs>(args?: SelectSubset<T, TeamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Team.
     * @param {TeamCreateArgs} args - Arguments to create a Team.
     * @example
     * // Create one Team
     * const Team = await prisma.team.create({
     *   data: {
     *     // ... data to create a Team
     *   }
     * })
     * 
     */
    create<T extends TeamCreateArgs>(args: SelectSubset<T, TeamCreateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Teams.
     * @param {TeamCreateManyArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamCreateManyArgs>(args?: SelectSubset<T, TeamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teams and returns the data saved in the database.
     * @param {TeamCreateManyAndReturnArgs} args - Arguments to create many Teams.
     * @example
     * // Create many Teams
     * const team = await prisma.team.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Team.
     * @param {TeamDeleteArgs} args - Arguments to delete one Team.
     * @example
     * // Delete one Team
     * const Team = await prisma.team.delete({
     *   where: {
     *     // ... filter to delete one Team
     *   }
     * })
     * 
     */
    delete<T extends TeamDeleteArgs>(args: SelectSubset<T, TeamDeleteArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Team.
     * @param {TeamUpdateArgs} args - Arguments to update one Team.
     * @example
     * // Update one Team
     * const team = await prisma.team.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamUpdateArgs>(args: SelectSubset<T, TeamUpdateArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Teams.
     * @param {TeamDeleteManyArgs} args - Arguments to filter Teams to delete.
     * @example
     * // Delete a few Teams
     * const { count } = await prisma.team.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamDeleteManyArgs>(args?: SelectSubset<T, TeamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamUpdateManyArgs>(args: SelectSubset<T, TeamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teams and returns the data updated in the database.
     * @param {TeamUpdateManyAndReturnArgs} args - Arguments to update many Teams.
     * @example
     * // Update many Teams
     * const team = await prisma.team.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Teams and only return the `id`
     * const teamWithIdOnly = await prisma.team.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Team.
     * @param {TeamUpsertArgs} args - Arguments to update or create a Team.
     * @example
     * // Update or create a Team
     * const team = await prisma.team.upsert({
     *   create: {
     *     // ... data to create a Team
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Team we want to update
     *   }
     * })
     */
    upsert<T extends TeamUpsertArgs>(args: SelectSubset<T, TeamUpsertArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Teams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamCountArgs} args - Arguments to filter Teams to count.
     * @example
     * // Count the number of Teams
     * const count = await prisma.team.count({
     *   where: {
     *     // ... the filter for the Teams we want to count
     *   }
     * })
    **/
    count<T extends TeamCountArgs>(
      args?: Subset<T, TeamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamAggregateArgs>(args: Subset<T, TeamAggregateArgs>): Prisma.PrismaPromise<GetTeamAggregateType<T>>

    /**
     * Group by Team.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamGroupByArgs} args - Group by arguments.
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
      T extends TeamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamGroupByArgs['orderBy'] }
        : { orderBy?: TeamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Team model
   */
  readonly fields: TeamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Team.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    members<T extends Team$membersArgs<ExtArgs> = {}>(args?: Subset<T, Team$membersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Team model
   */
  interface TeamFieldRefs {
    readonly id: FieldRef<"Team", 'String'>
    readonly name: FieldRef<"Team", 'String'>
    readonly createdAt: FieldRef<"Team", 'DateTime'>
    readonly updatedAt: FieldRef<"Team", 'DateTime'>
    readonly workspaceId: FieldRef<"Team", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Team findUnique
   */
  export type TeamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findUniqueOrThrow
   */
  export type TeamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team findFirst
   */
  export type TeamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findFirstOrThrow
   */
  export type TeamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Team to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teams.
     */
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team findMany
   */
  export type TeamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter, which Teams to fetch.
     */
    where?: TeamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teams to fetch.
     */
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teams.
     */
    cursor?: TeamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teams.
     */
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Team create
   */
  export type TeamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to create a Team.
     */
    data: XOR<TeamCreateInput, TeamUncheckedCreateInput>
  }

  /**
   * Team createMany
   */
  export type TeamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Team createManyAndReturn
   */
  export type TeamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to create many Teams.
     */
    data: TeamCreateManyInput | TeamCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team update
   */
  export type TeamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The data needed to update a Team.
     */
    data: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
    /**
     * Choose, which Team to update.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team updateMany
   */
  export type TeamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
  }

  /**
   * Team updateManyAndReturn
   */
  export type TeamUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * The data used to update Teams.
     */
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyInput>
    /**
     * Filter which Teams to update
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Team upsert
   */
  export type TeamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * The filter to search for the Team to update in case it exists.
     */
    where: TeamWhereUniqueInput
    /**
     * In case the Team found by the `where` argument doesn't exist, create a new Team with this data.
     */
    create: XOR<TeamCreateInput, TeamUncheckedCreateInput>
    /**
     * In case the Team was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamUpdateInput, TeamUncheckedUpdateInput>
  }

  /**
   * Team delete
   */
  export type TeamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    /**
     * Filter which Team to delete.
     */
    where: TeamWhereUniqueInput
  }

  /**
   * Team deleteMany
   */
  export type TeamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teams to delete
     */
    where?: TeamWhereInput
    /**
     * Limit how many Teams to delete.
     */
    limit?: number
  }

  /**
   * Team.members
   */
  export type Team$membersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * Team without action
   */
  export type TeamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
  }


  /**
   * Model TeamMember
   */

  export type AggregateTeamMember = {
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  export type TeamMemberMinAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    role: $Enums.TeamRole | null
    joinedAt: Date | null
  }

  export type TeamMemberMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    teamId: string | null
    role: $Enums.TeamRole | null
    joinedAt: Date | null
  }

  export type TeamMemberCountAggregateOutputType = {
    id: number
    userId: number
    teamId: number
    role: number
    joinedAt: number
    _all: number
  }


  export type TeamMemberMinAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    joinedAt?: true
  }

  export type TeamMemberMaxAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    joinedAt?: true
  }

  export type TeamMemberCountAggregateInputType = {
    id?: true
    userId?: true
    teamId?: true
    role?: true
    joinedAt?: true
    _all?: true
  }

  export type TeamMemberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMember to aggregate.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeamMembers
    **/
    _count?: true | TeamMemberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeamMemberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeamMemberMaxAggregateInputType
  }

  export type GetTeamMemberAggregateType<T extends TeamMemberAggregateArgs> = {
        [P in keyof T & keyof AggregateTeamMember]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeamMember[P]>
      : GetScalarType<T[P], AggregateTeamMember[P]>
  }




  export type TeamMemberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithAggregationInput | TeamMemberOrderByWithAggregationInput[]
    by: TeamMemberScalarFieldEnum[] | TeamMemberScalarFieldEnum
    having?: TeamMemberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeamMemberCountAggregateInputType | true
    _min?: TeamMemberMinAggregateInputType
    _max?: TeamMemberMaxAggregateInputType
  }

  export type TeamMemberGroupByOutputType = {
    id: string
    userId: string
    teamId: string
    role: $Enums.TeamRole
    joinedAt: Date
    _count: TeamMemberCountAggregateOutputType | null
    _min: TeamMemberMinAggregateOutputType | null
    _max: TeamMemberMaxAggregateOutputType | null
  }

  type GetTeamMemberGroupByPayload<T extends TeamMemberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeamMemberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeamMemberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
            : GetScalarType<T[P], TeamMemberGroupByOutputType[P]>
        }
      >
    >


  export type TeamMemberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    joinedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teamMember"]>

  export type TeamMemberSelectScalar = {
    id?: boolean
    userId?: boolean
    teamId?: boolean
    role?: boolean
    joinedAt?: boolean
  }

  export type TeamMemberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "teamId" | "role" | "joinedAt", ExtArgs["result"]["teamMember"]>
  export type TeamMemberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }
  export type TeamMemberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    team?: boolean | TeamDefaultArgs<ExtArgs>
  }

  export type $TeamMemberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeamMember"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      team: Prisma.$TeamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      teamId: string
      role: $Enums.TeamRole
      joinedAt: Date
    }, ExtArgs["result"]["teamMember"]>
    composites: {}
  }

  type TeamMemberGetPayload<S extends boolean | null | undefined | TeamMemberDefaultArgs> = $Result.GetResult<Prisma.$TeamMemberPayload, S>

  type TeamMemberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TeamMemberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TeamMemberCountAggregateInputType | true
    }

  export interface TeamMemberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeamMember'], meta: { name: 'TeamMember' } }
    /**
     * Find zero or one TeamMember that matches the filter.
     * @param {TeamMemberFindUniqueArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeamMemberFindUniqueArgs>(args: SelectSubset<T, TeamMemberFindUniqueArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TeamMember that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TeamMemberFindUniqueOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeamMemberFindUniqueOrThrowArgs>(args: SelectSubset<T, TeamMemberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeamMemberFindFirstArgs>(args?: SelectSubset<T, TeamMemberFindFirstArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TeamMember that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindFirstOrThrowArgs} args - Arguments to find a TeamMember
     * @example
     * // Get one TeamMember
     * const teamMember = await prisma.teamMember.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeamMemberFindFirstOrThrowArgs>(args?: SelectSubset<T, TeamMemberFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TeamMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeamMembers
     * const teamMembers = await prisma.teamMember.findMany()
     * 
     * // Get first 10 TeamMembers
     * const teamMembers = await prisma.teamMember.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeamMemberFindManyArgs>(args?: SelectSubset<T, TeamMemberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TeamMember.
     * @param {TeamMemberCreateArgs} args - Arguments to create a TeamMember.
     * @example
     * // Create one TeamMember
     * const TeamMember = await prisma.teamMember.create({
     *   data: {
     *     // ... data to create a TeamMember
     *   }
     * })
     * 
     */
    create<T extends TeamMemberCreateArgs>(args: SelectSubset<T, TeamMemberCreateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TeamMembers.
     * @param {TeamMemberCreateManyArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeamMemberCreateManyArgs>(args?: SelectSubset<T, TeamMemberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeamMembers and returns the data saved in the database.
     * @param {TeamMemberCreateManyAndReturnArgs} args - Arguments to create many TeamMembers.
     * @example
     * // Create many TeamMembers
     * const teamMember = await prisma.teamMember.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeamMemberCreateManyAndReturnArgs>(args?: SelectSubset<T, TeamMemberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TeamMember.
     * @param {TeamMemberDeleteArgs} args - Arguments to delete one TeamMember.
     * @example
     * // Delete one TeamMember
     * const TeamMember = await prisma.teamMember.delete({
     *   where: {
     *     // ... filter to delete one TeamMember
     *   }
     * })
     * 
     */
    delete<T extends TeamMemberDeleteArgs>(args: SelectSubset<T, TeamMemberDeleteArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TeamMember.
     * @param {TeamMemberUpdateArgs} args - Arguments to update one TeamMember.
     * @example
     * // Update one TeamMember
     * const teamMember = await prisma.teamMember.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeamMemberUpdateArgs>(args: SelectSubset<T, TeamMemberUpdateArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TeamMembers.
     * @param {TeamMemberDeleteManyArgs} args - Arguments to filter TeamMembers to delete.
     * @example
     * // Delete a few TeamMembers
     * const { count } = await prisma.teamMember.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeamMemberDeleteManyArgs>(args?: SelectSubset<T, TeamMemberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeamMemberUpdateManyArgs>(args: SelectSubset<T, TeamMemberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeamMembers and returns the data updated in the database.
     * @param {TeamMemberUpdateManyAndReturnArgs} args - Arguments to update many TeamMembers.
     * @example
     * // Update many TeamMembers
     * const teamMember = await prisma.teamMember.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TeamMembers and only return the `id`
     * const teamMemberWithIdOnly = await prisma.teamMember.updateManyAndReturn({
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
    updateManyAndReturn<T extends TeamMemberUpdateManyAndReturnArgs>(args: SelectSubset<T, TeamMemberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TeamMember.
     * @param {TeamMemberUpsertArgs} args - Arguments to update or create a TeamMember.
     * @example
     * // Update or create a TeamMember
     * const teamMember = await prisma.teamMember.upsert({
     *   create: {
     *     // ... data to create a TeamMember
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeamMember we want to update
     *   }
     * })
     */
    upsert<T extends TeamMemberUpsertArgs>(args: SelectSubset<T, TeamMemberUpsertArgs<ExtArgs>>): Prisma__TeamMemberClient<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TeamMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberCountArgs} args - Arguments to filter TeamMembers to count.
     * @example
     * // Count the number of TeamMembers
     * const count = await prisma.teamMember.count({
     *   where: {
     *     // ... the filter for the TeamMembers we want to count
     *   }
     * })
    **/
    count<T extends TeamMemberCountArgs>(
      args?: Subset<T, TeamMemberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeamMemberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TeamMemberAggregateArgs>(args: Subset<T, TeamMemberAggregateArgs>): Prisma.PrismaPromise<GetTeamMemberAggregateType<T>>

    /**
     * Group by TeamMember.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeamMemberGroupByArgs} args - Group by arguments.
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
      T extends TeamMemberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeamMemberGroupByArgs['orderBy'] }
        : { orderBy?: TeamMemberGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TeamMemberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeamMemberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeamMember model
   */
  readonly fields: TeamMemberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeamMember.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeamMemberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    team<T extends TeamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeamDefaultArgs<ExtArgs>>): Prisma__TeamClient<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TeamMember model
   */
  interface TeamMemberFieldRefs {
    readonly id: FieldRef<"TeamMember", 'String'>
    readonly userId: FieldRef<"TeamMember", 'String'>
    readonly teamId: FieldRef<"TeamMember", 'String'>
    readonly role: FieldRef<"TeamMember", 'TeamRole'>
    readonly joinedAt: FieldRef<"TeamMember", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TeamMember findUnique
   */
  export type TeamMemberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findUniqueOrThrow
   */
  export type TeamMemberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember findFirst
   */
  export type TeamMemberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findFirstOrThrow
   */
  export type TeamMemberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMember to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeamMembers.
     */
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember findMany
   */
  export type TeamMemberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter, which TeamMembers to fetch.
     */
    where?: TeamMemberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeamMembers to fetch.
     */
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeamMembers.
     */
    cursor?: TeamMemberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeamMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeamMembers.
     */
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * TeamMember create
   */
  export type TeamMemberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to create a TeamMember.
     */
    data: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
  }

  /**
   * TeamMember createMany
   */
  export type TeamMemberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeamMember createManyAndReturn
   */
  export type TeamMemberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to create many TeamMembers.
     */
    data: TeamMemberCreateManyInput | TeamMemberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember update
   */
  export type TeamMemberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The data needed to update a TeamMember.
     */
    data: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
    /**
     * Choose, which TeamMember to update.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember updateMany
   */
  export type TeamMemberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
  }

  /**
   * TeamMember updateManyAndReturn
   */
  export type TeamMemberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * The data used to update TeamMembers.
     */
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyInput>
    /**
     * Filter which TeamMembers to update
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeamMember upsert
   */
  export type TeamMemberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * The filter to search for the TeamMember to update in case it exists.
     */
    where: TeamMemberWhereUniqueInput
    /**
     * In case the TeamMember found by the `where` argument doesn't exist, create a new TeamMember with this data.
     */
    create: XOR<TeamMemberCreateInput, TeamMemberUncheckedCreateInput>
    /**
     * In case the TeamMember was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeamMemberUpdateInput, TeamMemberUncheckedUpdateInput>
  }

  /**
   * TeamMember delete
   */
  export type TeamMemberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    /**
     * Filter which TeamMember to delete.
     */
    where: TeamMemberWhereUniqueInput
  }

  /**
   * TeamMember deleteMany
   */
  export type TeamMemberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeamMembers to delete
     */
    where?: TeamMemberWhereInput
    /**
     * Limit how many TeamMembers to delete.
     */
    limit?: number
  }

  /**
   * TeamMember without action
   */
  export type TeamMemberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
  }


  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    updatedAt: Date
    userId: string | null
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    teams?: boolean | Workspace$teamsArgs<ExtArgs>
    mindmaps?: boolean | Workspace$mindmapsArgs<ExtArgs>
    flowcharts?: boolean | Workspace$flowchartsArgs<ExtArgs>
    whiteboards?: boolean | Workspace$whiteboardsArgs<ExtArgs>
    User?: boolean | Workspace$UserArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | Workspace$UserArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    User?: boolean | Workspace$UserArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type WorkspaceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["workspace"]>
  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teams?: boolean | Workspace$teamsArgs<ExtArgs>
    mindmaps?: boolean | Workspace$mindmapsArgs<ExtArgs>
    flowcharts?: boolean | Workspace$flowchartsArgs<ExtArgs>
    whiteboards?: boolean | Workspace$whiteboardsArgs<ExtArgs>
    User?: boolean | Workspace$UserArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Workspace$UserArgs<ExtArgs>
  }
  export type WorkspaceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | Workspace$UserArgs<ExtArgs>
  }

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      teams: Prisma.$TeamPayload<ExtArgs>[]
      mindmaps: Prisma.$MindMapPayload<ExtArgs>[]
      flowcharts: Prisma.$FlowchartPayload<ExtArgs>[]
      whiteboards: Prisma.$WhiteboardPayload<ExtArgs>[]
      User: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
      updatedAt: Date
      userId: string | null
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {WorkspaceUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkspaceUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkspaceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teams<T extends Workspace$teamsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$teamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mindmaps<T extends Workspace$mindmapsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$mindmapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    flowcharts<T extends Workspace$flowchartsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$flowchartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    whiteboards<T extends Workspace$whiteboardsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$whiteboardsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    User<T extends Workspace$UserArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$UserArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Workspace model
   */
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
    readonly updatedAt: FieldRef<"Workspace", 'DateTime'>
    readonly userId: FieldRef<"Workspace", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
  }

  /**
   * Workspace updateManyAndReturn
   */
  export type WorkspaceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
    /**
     * Limit how many Workspaces to delete.
     */
    limit?: number
  }

  /**
   * Workspace.teams
   */
  export type Workspace$teamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Team
     */
    select?: TeamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Team
     */
    omit?: TeamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamInclude<ExtArgs> | null
    where?: TeamWhereInput
    orderBy?: TeamOrderByWithRelationInput | TeamOrderByWithRelationInput[]
    cursor?: TeamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamScalarFieldEnum | TeamScalarFieldEnum[]
  }

  /**
   * Workspace.mindmaps
   */
  export type Workspace$mindmapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
    where?: MindMapWhereInput
    orderBy?: MindMapOrderByWithRelationInput | MindMapOrderByWithRelationInput[]
    cursor?: MindMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MindMapScalarFieldEnum | MindMapScalarFieldEnum[]
  }

  /**
   * Workspace.flowcharts
   */
  export type Workspace$flowchartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    where?: FlowchartWhereInput
    orderBy?: FlowchartOrderByWithRelationInput | FlowchartOrderByWithRelationInput[]
    cursor?: FlowchartWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlowchartScalarFieldEnum | FlowchartScalarFieldEnum[]
  }

  /**
   * Workspace.whiteboards
   */
  export type Workspace$whiteboardsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    where?: WhiteboardWhereInput
    orderBy?: WhiteboardOrderByWithRelationInput | WhiteboardOrderByWithRelationInput[]
    cursor?: WhiteboardWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WhiteboardScalarFieldEnum | WhiteboardScalarFieldEnum[]
  }

  /**
   * Workspace.User
   */
  export type Workspace$UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


  /**
   * Model Flowchart
   */

  export type AggregateFlowchart = {
    _count: FlowchartCountAggregateOutputType | null
    _min: FlowchartMinAggregateOutputType | null
    _max: FlowchartMaxAggregateOutputType | null
  }

  export type FlowchartMinAggregateOutputType = {
    id: string | null
    title: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowchartMaxAggregateOutputType = {
    id: string | null
    title: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlowchartCountAggregateOutputType = {
    id: number
    title: number
    workspaceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlowchartMinAggregateInputType = {
    id?: true
    title?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowchartMaxAggregateInputType = {
    id?: true
    title?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlowchartCountAggregateInputType = {
    id?: true
    title?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlowchartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flowchart to aggregate.
     */
    where?: FlowchartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowcharts to fetch.
     */
    orderBy?: FlowchartOrderByWithRelationInput | FlowchartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowchartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowcharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowcharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flowcharts
    **/
    _count?: true | FlowchartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowchartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowchartMaxAggregateInputType
  }

  export type GetFlowchartAggregateType<T extends FlowchartAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowchart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowchart[P]>
      : GetScalarType<T[P], AggregateFlowchart[P]>
  }




  export type FlowchartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlowchartWhereInput
    orderBy?: FlowchartOrderByWithAggregationInput | FlowchartOrderByWithAggregationInput[]
    by: FlowchartScalarFieldEnum[] | FlowchartScalarFieldEnum
    having?: FlowchartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowchartCountAggregateInputType | true
    _min?: FlowchartMinAggregateInputType
    _max?: FlowchartMaxAggregateInputType
  }

  export type FlowchartGroupByOutputType = {
    id: string
    title: string
    workspaceId: string
    createdAt: Date
    updatedAt: Date
    _count: FlowchartCountAggregateOutputType | null
    _min: FlowchartMinAggregateOutputType | null
    _max: FlowchartMaxAggregateOutputType | null
  }

  type GetFlowchartGroupByPayload<T extends FlowchartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlowchartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowchartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowchartGroupByOutputType[P]>
            : GetScalarType<T[P], FlowchartGroupByOutputType[P]>
        }
      >
    >


  export type FlowchartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowchart"]>

  export type FlowchartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowchart"]>

  export type FlowchartSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flowchart"]>

  export type FlowchartSelectScalar = {
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlowchartOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "workspaceId" | "createdAt" | "updatedAt", ExtArgs["result"]["flowchart"]>
  export type FlowchartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type FlowchartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type FlowchartIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $FlowchartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Flowchart"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      workspaceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flowchart"]>
    composites: {}
  }

  type FlowchartGetPayload<S extends boolean | null | undefined | FlowchartDefaultArgs> = $Result.GetResult<Prisma.$FlowchartPayload, S>

  type FlowchartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FlowchartFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FlowchartCountAggregateInputType | true
    }

  export interface FlowchartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Flowchart'], meta: { name: 'Flowchart' } }
    /**
     * Find zero or one Flowchart that matches the filter.
     * @param {FlowchartFindUniqueArgs} args - Arguments to find a Flowchart
     * @example
     * // Get one Flowchart
     * const flowchart = await prisma.flowchart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlowchartFindUniqueArgs>(args: SelectSubset<T, FlowchartFindUniqueArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flowchart that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FlowchartFindUniqueOrThrowArgs} args - Arguments to find a Flowchart
     * @example
     * // Get one Flowchart
     * const flowchart = await prisma.flowchart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlowchartFindUniqueOrThrowArgs>(args: SelectSubset<T, FlowchartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowchart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartFindFirstArgs} args - Arguments to find a Flowchart
     * @example
     * // Get one Flowchart
     * const flowchart = await prisma.flowchart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlowchartFindFirstArgs>(args?: SelectSubset<T, FlowchartFindFirstArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flowchart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartFindFirstOrThrowArgs} args - Arguments to find a Flowchart
     * @example
     * // Get one Flowchart
     * const flowchart = await prisma.flowchart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlowchartFindFirstOrThrowArgs>(args?: SelectSubset<T, FlowchartFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flowcharts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flowcharts
     * const flowcharts = await prisma.flowchart.findMany()
     * 
     * // Get first 10 Flowcharts
     * const flowcharts = await prisma.flowchart.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowchartWithIdOnly = await prisma.flowchart.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlowchartFindManyArgs>(args?: SelectSubset<T, FlowchartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flowchart.
     * @param {FlowchartCreateArgs} args - Arguments to create a Flowchart.
     * @example
     * // Create one Flowchart
     * const Flowchart = await prisma.flowchart.create({
     *   data: {
     *     // ... data to create a Flowchart
     *   }
     * })
     * 
     */
    create<T extends FlowchartCreateArgs>(args: SelectSubset<T, FlowchartCreateArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flowcharts.
     * @param {FlowchartCreateManyArgs} args - Arguments to create many Flowcharts.
     * @example
     * // Create many Flowcharts
     * const flowchart = await prisma.flowchart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlowchartCreateManyArgs>(args?: SelectSubset<T, FlowchartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Flowcharts and returns the data saved in the database.
     * @param {FlowchartCreateManyAndReturnArgs} args - Arguments to create many Flowcharts.
     * @example
     * // Create many Flowcharts
     * const flowchart = await prisma.flowchart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Flowcharts and only return the `id`
     * const flowchartWithIdOnly = await prisma.flowchart.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FlowchartCreateManyAndReturnArgs>(args?: SelectSubset<T, FlowchartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Flowchart.
     * @param {FlowchartDeleteArgs} args - Arguments to delete one Flowchart.
     * @example
     * // Delete one Flowchart
     * const Flowchart = await prisma.flowchart.delete({
     *   where: {
     *     // ... filter to delete one Flowchart
     *   }
     * })
     * 
     */
    delete<T extends FlowchartDeleteArgs>(args: SelectSubset<T, FlowchartDeleteArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flowchart.
     * @param {FlowchartUpdateArgs} args - Arguments to update one Flowchart.
     * @example
     * // Update one Flowchart
     * const flowchart = await prisma.flowchart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlowchartUpdateArgs>(args: SelectSubset<T, FlowchartUpdateArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flowcharts.
     * @param {FlowchartDeleteManyArgs} args - Arguments to filter Flowcharts to delete.
     * @example
     * // Delete a few Flowcharts
     * const { count } = await prisma.flowchart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlowchartDeleteManyArgs>(args?: SelectSubset<T, FlowchartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowcharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flowcharts
     * const flowchart = await prisma.flowchart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlowchartUpdateManyArgs>(args: SelectSubset<T, FlowchartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flowcharts and returns the data updated in the database.
     * @param {FlowchartUpdateManyAndReturnArgs} args - Arguments to update many Flowcharts.
     * @example
     * // Update many Flowcharts
     * const flowchart = await prisma.flowchart.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Flowcharts and only return the `id`
     * const flowchartWithIdOnly = await prisma.flowchart.updateManyAndReturn({
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
    updateManyAndReturn<T extends FlowchartUpdateManyAndReturnArgs>(args: SelectSubset<T, FlowchartUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Flowchart.
     * @param {FlowchartUpsertArgs} args - Arguments to update or create a Flowchart.
     * @example
     * // Update or create a Flowchart
     * const flowchart = await prisma.flowchart.upsert({
     *   create: {
     *     // ... data to create a Flowchart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flowchart we want to update
     *   }
     * })
     */
    upsert<T extends FlowchartUpsertArgs>(args: SelectSubset<T, FlowchartUpsertArgs<ExtArgs>>): Prisma__FlowchartClient<$Result.GetResult<Prisma.$FlowchartPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flowcharts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartCountArgs} args - Arguments to filter Flowcharts to count.
     * @example
     * // Count the number of Flowcharts
     * const count = await prisma.flowchart.count({
     *   where: {
     *     // ... the filter for the Flowcharts we want to count
     *   }
     * })
    **/
    count<T extends FlowchartCountArgs>(
      args?: Subset<T, FlowchartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowchartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flowchart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FlowchartAggregateArgs>(args: Subset<T, FlowchartAggregateArgs>): Prisma.PrismaPromise<GetFlowchartAggregateType<T>>

    /**
     * Group by Flowchart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowchartGroupByArgs} args - Group by arguments.
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
      T extends FlowchartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowchartGroupByArgs['orderBy'] }
        : { orderBy?: FlowchartGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FlowchartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowchartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Flowchart model
   */
  readonly fields: FlowchartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Flowchart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlowchartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Flowchart model
   */
  interface FlowchartFieldRefs {
    readonly id: FieldRef<"Flowchart", 'String'>
    readonly title: FieldRef<"Flowchart", 'String'>
    readonly workspaceId: FieldRef<"Flowchart", 'String'>
    readonly createdAt: FieldRef<"Flowchart", 'DateTime'>
    readonly updatedAt: FieldRef<"Flowchart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Flowchart findUnique
   */
  export type FlowchartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter, which Flowchart to fetch.
     */
    where: FlowchartWhereUniqueInput
  }

  /**
   * Flowchart findUniqueOrThrow
   */
  export type FlowchartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter, which Flowchart to fetch.
     */
    where: FlowchartWhereUniqueInput
  }

  /**
   * Flowchart findFirst
   */
  export type FlowchartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter, which Flowchart to fetch.
     */
    where?: FlowchartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowcharts to fetch.
     */
    orderBy?: FlowchartOrderByWithRelationInput | FlowchartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flowcharts.
     */
    cursor?: FlowchartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowcharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowcharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flowcharts.
     */
    distinct?: FlowchartScalarFieldEnum | FlowchartScalarFieldEnum[]
  }

  /**
   * Flowchart findFirstOrThrow
   */
  export type FlowchartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter, which Flowchart to fetch.
     */
    where?: FlowchartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowcharts to fetch.
     */
    orderBy?: FlowchartOrderByWithRelationInput | FlowchartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flowcharts.
     */
    cursor?: FlowchartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowcharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowcharts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flowcharts.
     */
    distinct?: FlowchartScalarFieldEnum | FlowchartScalarFieldEnum[]
  }

  /**
   * Flowchart findMany
   */
  export type FlowchartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter, which Flowcharts to fetch.
     */
    where?: FlowchartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flowcharts to fetch.
     */
    orderBy?: FlowchartOrderByWithRelationInput | FlowchartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flowcharts.
     */
    cursor?: FlowchartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flowcharts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flowcharts.
     */
    skip?: number
    distinct?: FlowchartScalarFieldEnum | FlowchartScalarFieldEnum[]
  }

  /**
   * Flowchart create
   */
  export type FlowchartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * The data needed to create a Flowchart.
     */
    data: XOR<FlowchartCreateInput, FlowchartUncheckedCreateInput>
  }

  /**
   * Flowchart createMany
   */
  export type FlowchartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Flowcharts.
     */
    data: FlowchartCreateManyInput | FlowchartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Flowchart createManyAndReturn
   */
  export type FlowchartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * The data used to create many Flowcharts.
     */
    data: FlowchartCreateManyInput | FlowchartCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flowchart update
   */
  export type FlowchartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * The data needed to update a Flowchart.
     */
    data: XOR<FlowchartUpdateInput, FlowchartUncheckedUpdateInput>
    /**
     * Choose, which Flowchart to update.
     */
    where: FlowchartWhereUniqueInput
  }

  /**
   * Flowchart updateMany
   */
  export type FlowchartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Flowcharts.
     */
    data: XOR<FlowchartUpdateManyMutationInput, FlowchartUncheckedUpdateManyInput>
    /**
     * Filter which Flowcharts to update
     */
    where?: FlowchartWhereInput
    /**
     * Limit how many Flowcharts to update.
     */
    limit?: number
  }

  /**
   * Flowchart updateManyAndReturn
   */
  export type FlowchartUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * The data used to update Flowcharts.
     */
    data: XOR<FlowchartUpdateManyMutationInput, FlowchartUncheckedUpdateManyInput>
    /**
     * Filter which Flowcharts to update
     */
    where?: FlowchartWhereInput
    /**
     * Limit how many Flowcharts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Flowchart upsert
   */
  export type FlowchartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * The filter to search for the Flowchart to update in case it exists.
     */
    where: FlowchartWhereUniqueInput
    /**
     * In case the Flowchart found by the `where` argument doesn't exist, create a new Flowchart with this data.
     */
    create: XOR<FlowchartCreateInput, FlowchartUncheckedCreateInput>
    /**
     * In case the Flowchart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowchartUpdateInput, FlowchartUncheckedUpdateInput>
  }

  /**
   * Flowchart delete
   */
  export type FlowchartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
    /**
     * Filter which Flowchart to delete.
     */
    where: FlowchartWhereUniqueInput
  }

  /**
   * Flowchart deleteMany
   */
  export type FlowchartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Flowcharts to delete
     */
    where?: FlowchartWhereInput
    /**
     * Limit how many Flowcharts to delete.
     */
    limit?: number
  }

  /**
   * Flowchart without action
   */
  export type FlowchartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Flowchart
     */
    select?: FlowchartSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Flowchart
     */
    omit?: FlowchartOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlowchartInclude<ExtArgs> | null
  }


  /**
   * Model Whiteboard
   */

  export type AggregateWhiteboard = {
    _count: WhiteboardCountAggregateOutputType | null
    _min: WhiteboardMinAggregateOutputType | null
    _max: WhiteboardMaxAggregateOutputType | null
  }

  export type WhiteboardMinAggregateOutputType = {
    id: string | null
    title: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhiteboardMaxAggregateOutputType = {
    id: string | null
    title: string | null
    workspaceId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WhiteboardCountAggregateOutputType = {
    id: number
    title: number
    workspaceId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WhiteboardMinAggregateInputType = {
    id?: true
    title?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhiteboardMaxAggregateInputType = {
    id?: true
    title?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WhiteboardCountAggregateInputType = {
    id?: true
    title?: true
    workspaceId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WhiteboardAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Whiteboard to aggregate.
     */
    where?: WhiteboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whiteboards to fetch.
     */
    orderBy?: WhiteboardOrderByWithRelationInput | WhiteboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WhiteboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whiteboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whiteboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Whiteboards
    **/
    _count?: true | WhiteboardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WhiteboardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WhiteboardMaxAggregateInputType
  }

  export type GetWhiteboardAggregateType<T extends WhiteboardAggregateArgs> = {
        [P in keyof T & keyof AggregateWhiteboard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWhiteboard[P]>
      : GetScalarType<T[P], AggregateWhiteboard[P]>
  }




  export type WhiteboardGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WhiteboardWhereInput
    orderBy?: WhiteboardOrderByWithAggregationInput | WhiteboardOrderByWithAggregationInput[]
    by: WhiteboardScalarFieldEnum[] | WhiteboardScalarFieldEnum
    having?: WhiteboardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WhiteboardCountAggregateInputType | true
    _min?: WhiteboardMinAggregateInputType
    _max?: WhiteboardMaxAggregateInputType
  }

  export type WhiteboardGroupByOutputType = {
    id: string
    title: string
    workspaceId: string
    createdAt: Date
    updatedAt: Date
    _count: WhiteboardCountAggregateOutputType | null
    _min: WhiteboardMinAggregateOutputType | null
    _max: WhiteboardMaxAggregateOutputType | null
  }

  type GetWhiteboardGroupByPayload<T extends WhiteboardGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WhiteboardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WhiteboardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WhiteboardGroupByOutputType[P]>
            : GetScalarType<T[P], WhiteboardGroupByOutputType[P]>
        }
      >
    >


  export type WhiteboardSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whiteboard"]>

  export type WhiteboardSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whiteboard"]>

  export type WhiteboardSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["whiteboard"]>

  export type WhiteboardSelectScalar = {
    id?: boolean
    title?: boolean
    workspaceId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WhiteboardOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "workspaceId" | "createdAt" | "updatedAt", ExtArgs["result"]["whiteboard"]>
  export type WhiteboardInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WhiteboardIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type WhiteboardIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $WhiteboardPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Whiteboard"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      workspaceId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["whiteboard"]>
    composites: {}
  }

  type WhiteboardGetPayload<S extends boolean | null | undefined | WhiteboardDefaultArgs> = $Result.GetResult<Prisma.$WhiteboardPayload, S>

  type WhiteboardCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WhiteboardFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WhiteboardCountAggregateInputType | true
    }

  export interface WhiteboardDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Whiteboard'], meta: { name: 'Whiteboard' } }
    /**
     * Find zero or one Whiteboard that matches the filter.
     * @param {WhiteboardFindUniqueArgs} args - Arguments to find a Whiteboard
     * @example
     * // Get one Whiteboard
     * const whiteboard = await prisma.whiteboard.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WhiteboardFindUniqueArgs>(args: SelectSubset<T, WhiteboardFindUniqueArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Whiteboard that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WhiteboardFindUniqueOrThrowArgs} args - Arguments to find a Whiteboard
     * @example
     * // Get one Whiteboard
     * const whiteboard = await prisma.whiteboard.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WhiteboardFindUniqueOrThrowArgs>(args: SelectSubset<T, WhiteboardFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whiteboard that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardFindFirstArgs} args - Arguments to find a Whiteboard
     * @example
     * // Get one Whiteboard
     * const whiteboard = await prisma.whiteboard.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WhiteboardFindFirstArgs>(args?: SelectSubset<T, WhiteboardFindFirstArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Whiteboard that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardFindFirstOrThrowArgs} args - Arguments to find a Whiteboard
     * @example
     * // Get one Whiteboard
     * const whiteboard = await prisma.whiteboard.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WhiteboardFindFirstOrThrowArgs>(args?: SelectSubset<T, WhiteboardFindFirstOrThrowArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Whiteboards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Whiteboards
     * const whiteboards = await prisma.whiteboard.findMany()
     * 
     * // Get first 10 Whiteboards
     * const whiteboards = await prisma.whiteboard.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const whiteboardWithIdOnly = await prisma.whiteboard.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WhiteboardFindManyArgs>(args?: SelectSubset<T, WhiteboardFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Whiteboard.
     * @param {WhiteboardCreateArgs} args - Arguments to create a Whiteboard.
     * @example
     * // Create one Whiteboard
     * const Whiteboard = await prisma.whiteboard.create({
     *   data: {
     *     // ... data to create a Whiteboard
     *   }
     * })
     * 
     */
    create<T extends WhiteboardCreateArgs>(args: SelectSubset<T, WhiteboardCreateArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Whiteboards.
     * @param {WhiteboardCreateManyArgs} args - Arguments to create many Whiteboards.
     * @example
     * // Create many Whiteboards
     * const whiteboard = await prisma.whiteboard.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WhiteboardCreateManyArgs>(args?: SelectSubset<T, WhiteboardCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Whiteboards and returns the data saved in the database.
     * @param {WhiteboardCreateManyAndReturnArgs} args - Arguments to create many Whiteboards.
     * @example
     * // Create many Whiteboards
     * const whiteboard = await prisma.whiteboard.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Whiteboards and only return the `id`
     * const whiteboardWithIdOnly = await prisma.whiteboard.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WhiteboardCreateManyAndReturnArgs>(args?: SelectSubset<T, WhiteboardCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Whiteboard.
     * @param {WhiteboardDeleteArgs} args - Arguments to delete one Whiteboard.
     * @example
     * // Delete one Whiteboard
     * const Whiteboard = await prisma.whiteboard.delete({
     *   where: {
     *     // ... filter to delete one Whiteboard
     *   }
     * })
     * 
     */
    delete<T extends WhiteboardDeleteArgs>(args: SelectSubset<T, WhiteboardDeleteArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Whiteboard.
     * @param {WhiteboardUpdateArgs} args - Arguments to update one Whiteboard.
     * @example
     * // Update one Whiteboard
     * const whiteboard = await prisma.whiteboard.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WhiteboardUpdateArgs>(args: SelectSubset<T, WhiteboardUpdateArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Whiteboards.
     * @param {WhiteboardDeleteManyArgs} args - Arguments to filter Whiteboards to delete.
     * @example
     * // Delete a few Whiteboards
     * const { count } = await prisma.whiteboard.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WhiteboardDeleteManyArgs>(args?: SelectSubset<T, WhiteboardDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whiteboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Whiteboards
     * const whiteboard = await prisma.whiteboard.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WhiteboardUpdateManyArgs>(args: SelectSubset<T, WhiteboardUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Whiteboards and returns the data updated in the database.
     * @param {WhiteboardUpdateManyAndReturnArgs} args - Arguments to update many Whiteboards.
     * @example
     * // Update many Whiteboards
     * const whiteboard = await prisma.whiteboard.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Whiteboards and only return the `id`
     * const whiteboardWithIdOnly = await prisma.whiteboard.updateManyAndReturn({
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
    updateManyAndReturn<T extends WhiteboardUpdateManyAndReturnArgs>(args: SelectSubset<T, WhiteboardUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Whiteboard.
     * @param {WhiteboardUpsertArgs} args - Arguments to update or create a Whiteboard.
     * @example
     * // Update or create a Whiteboard
     * const whiteboard = await prisma.whiteboard.upsert({
     *   create: {
     *     // ... data to create a Whiteboard
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Whiteboard we want to update
     *   }
     * })
     */
    upsert<T extends WhiteboardUpsertArgs>(args: SelectSubset<T, WhiteboardUpsertArgs<ExtArgs>>): Prisma__WhiteboardClient<$Result.GetResult<Prisma.$WhiteboardPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Whiteboards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardCountArgs} args - Arguments to filter Whiteboards to count.
     * @example
     * // Count the number of Whiteboards
     * const count = await prisma.whiteboard.count({
     *   where: {
     *     // ... the filter for the Whiteboards we want to count
     *   }
     * })
    **/
    count<T extends WhiteboardCountArgs>(
      args?: Subset<T, WhiteboardCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WhiteboardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Whiteboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WhiteboardAggregateArgs>(args: Subset<T, WhiteboardAggregateArgs>): Prisma.PrismaPromise<GetWhiteboardAggregateType<T>>

    /**
     * Group by Whiteboard.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WhiteboardGroupByArgs} args - Group by arguments.
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
      T extends WhiteboardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WhiteboardGroupByArgs['orderBy'] }
        : { orderBy?: WhiteboardGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WhiteboardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWhiteboardGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Whiteboard model
   */
  readonly fields: WhiteboardFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Whiteboard.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WhiteboardClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Whiteboard model
   */
  interface WhiteboardFieldRefs {
    readonly id: FieldRef<"Whiteboard", 'String'>
    readonly title: FieldRef<"Whiteboard", 'String'>
    readonly workspaceId: FieldRef<"Whiteboard", 'String'>
    readonly createdAt: FieldRef<"Whiteboard", 'DateTime'>
    readonly updatedAt: FieldRef<"Whiteboard", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Whiteboard findUnique
   */
  export type WhiteboardFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter, which Whiteboard to fetch.
     */
    where: WhiteboardWhereUniqueInput
  }

  /**
   * Whiteboard findUniqueOrThrow
   */
  export type WhiteboardFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter, which Whiteboard to fetch.
     */
    where: WhiteboardWhereUniqueInput
  }

  /**
   * Whiteboard findFirst
   */
  export type WhiteboardFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter, which Whiteboard to fetch.
     */
    where?: WhiteboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whiteboards to fetch.
     */
    orderBy?: WhiteboardOrderByWithRelationInput | WhiteboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Whiteboards.
     */
    cursor?: WhiteboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whiteboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whiteboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Whiteboards.
     */
    distinct?: WhiteboardScalarFieldEnum | WhiteboardScalarFieldEnum[]
  }

  /**
   * Whiteboard findFirstOrThrow
   */
  export type WhiteboardFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter, which Whiteboard to fetch.
     */
    where?: WhiteboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whiteboards to fetch.
     */
    orderBy?: WhiteboardOrderByWithRelationInput | WhiteboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Whiteboards.
     */
    cursor?: WhiteboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whiteboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whiteboards.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Whiteboards.
     */
    distinct?: WhiteboardScalarFieldEnum | WhiteboardScalarFieldEnum[]
  }

  /**
   * Whiteboard findMany
   */
  export type WhiteboardFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter, which Whiteboards to fetch.
     */
    where?: WhiteboardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Whiteboards to fetch.
     */
    orderBy?: WhiteboardOrderByWithRelationInput | WhiteboardOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Whiteboards.
     */
    cursor?: WhiteboardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Whiteboards from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Whiteboards.
     */
    skip?: number
    distinct?: WhiteboardScalarFieldEnum | WhiteboardScalarFieldEnum[]
  }

  /**
   * Whiteboard create
   */
  export type WhiteboardCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * The data needed to create a Whiteboard.
     */
    data: XOR<WhiteboardCreateInput, WhiteboardUncheckedCreateInput>
  }

  /**
   * Whiteboard createMany
   */
  export type WhiteboardCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Whiteboards.
     */
    data: WhiteboardCreateManyInput | WhiteboardCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Whiteboard createManyAndReturn
   */
  export type WhiteboardCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * The data used to create many Whiteboards.
     */
    data: WhiteboardCreateManyInput | WhiteboardCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Whiteboard update
   */
  export type WhiteboardUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * The data needed to update a Whiteboard.
     */
    data: XOR<WhiteboardUpdateInput, WhiteboardUncheckedUpdateInput>
    /**
     * Choose, which Whiteboard to update.
     */
    where: WhiteboardWhereUniqueInput
  }

  /**
   * Whiteboard updateMany
   */
  export type WhiteboardUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Whiteboards.
     */
    data: XOR<WhiteboardUpdateManyMutationInput, WhiteboardUncheckedUpdateManyInput>
    /**
     * Filter which Whiteboards to update
     */
    where?: WhiteboardWhereInput
    /**
     * Limit how many Whiteboards to update.
     */
    limit?: number
  }

  /**
   * Whiteboard updateManyAndReturn
   */
  export type WhiteboardUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * The data used to update Whiteboards.
     */
    data: XOR<WhiteboardUpdateManyMutationInput, WhiteboardUncheckedUpdateManyInput>
    /**
     * Filter which Whiteboards to update
     */
    where?: WhiteboardWhereInput
    /**
     * Limit how many Whiteboards to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Whiteboard upsert
   */
  export type WhiteboardUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * The filter to search for the Whiteboard to update in case it exists.
     */
    where: WhiteboardWhereUniqueInput
    /**
     * In case the Whiteboard found by the `where` argument doesn't exist, create a new Whiteboard with this data.
     */
    create: XOR<WhiteboardCreateInput, WhiteboardUncheckedCreateInput>
    /**
     * In case the Whiteboard was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WhiteboardUpdateInput, WhiteboardUncheckedUpdateInput>
  }

  /**
   * Whiteboard delete
   */
  export type WhiteboardDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
    /**
     * Filter which Whiteboard to delete.
     */
    where: WhiteboardWhereUniqueInput
  }

  /**
   * Whiteboard deleteMany
   */
  export type WhiteboardDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Whiteboards to delete
     */
    where?: WhiteboardWhereInput
    /**
     * Limit how many Whiteboards to delete.
     */
    limit?: number
  }

  /**
   * Whiteboard without action
   */
  export type WhiteboardDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Whiteboard
     */
    select?: WhiteboardSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Whiteboard
     */
    omit?: WhiteboardOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WhiteboardInclude<ExtArgs> | null
  }


  /**
   * Model Node
   */

  export type AggregateNode = {
    _count: NodeCountAggregateOutputType | null
    _avg: NodeAvgAggregateOutputType | null
    _sum: NodeSumAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  export type NodeAvgAggregateOutputType = {
    positionX: number | null
    positionY: number | null
  }

  export type NodeSumAggregateOutputType = {
    positionX: number | null
    positionY: number | null
  }

  export type NodeMinAggregateOutputType = {
    id: string | null
    mindMapId: string | null
    parentId: string | null
    content: string | null
    positionX: number | null
    positionY: number | null
    direction: $Enums.Direction | null
    createdBy: $Enums.NodeSource | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeMaxAggregateOutputType = {
    id: string | null
    mindMapId: string | null
    parentId: string | null
    content: string | null
    positionX: number | null
    positionY: number | null
    direction: $Enums.Direction | null
    createdBy: $Enums.NodeSource | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeCountAggregateOutputType = {
    id: number
    mindMapId: number
    parentId: number
    content: number
    positionX: number
    positionY: number
    direction: number
    createdBy: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NodeAvgAggregateInputType = {
    positionX?: true
    positionY?: true
  }

  export type NodeSumAggregateInputType = {
    positionX?: true
    positionY?: true
  }

  export type NodeMinAggregateInputType = {
    id?: true
    mindMapId?: true
    parentId?: true
    content?: true
    positionX?: true
    positionY?: true
    direction?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeMaxAggregateInputType = {
    id?: true
    mindMapId?: true
    parentId?: true
    content?: true
    positionX?: true
    positionY?: true
    direction?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeCountAggregateInputType = {
    id?: true
    mindMapId?: true
    parentId?: true
    content?: true
    positionX?: true
    positionY?: true
    direction?: true
    createdBy?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Node to aggregate.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nodes
    **/
    _count?: true | NodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodeMaxAggregateInputType
  }

  export type GetNodeAggregateType<T extends NodeAggregateArgs> = {
        [P in keyof T & keyof AggregateNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNode[P]>
      : GetScalarType<T[P], AggregateNode[P]>
  }




  export type NodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithAggregationInput | NodeOrderByWithAggregationInput[]
    by: NodeScalarFieldEnum[] | NodeScalarFieldEnum
    having?: NodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodeCountAggregateInputType | true
    _avg?: NodeAvgAggregateInputType
    _sum?: NodeSumAggregateInputType
    _min?: NodeMinAggregateInputType
    _max?: NodeMaxAggregateInputType
  }

  export type NodeGroupByOutputType = {
    id: string
    mindMapId: string
    parentId: string | null
    content: string
    positionX: number
    positionY: number
    direction: $Enums.Direction
    createdBy: $Enums.NodeSource
    createdAt: Date
    updatedAt: Date
    _count: NodeCountAggregateOutputType | null
    _avg: NodeAvgAggregateOutputType | null
    _sum: NodeSumAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  type GetNodeGroupByPayload<T extends NodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodeGroupByOutputType[P]>
            : GetScalarType<T[P], NodeGroupByOutputType[P]>
        }
      >
    >


  export type NodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mindMapId?: boolean
    parentId?: boolean
    content?: boolean
    positionX?: boolean
    positionY?: boolean
    direction?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
    parent?: boolean | Node$parentArgs<ExtArgs>
    children?: boolean | Node$childrenArgs<ExtArgs>
    _count?: boolean | NodeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mindMapId?: boolean
    parentId?: boolean
    content?: boolean
    positionX?: boolean
    positionY?: boolean
    direction?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
    parent?: boolean | Node$parentArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mindMapId?: boolean
    parentId?: boolean
    content?: boolean
    positionX?: boolean
    positionY?: boolean
    direction?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
    parent?: boolean | Node$parentArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectScalar = {
    id?: boolean
    mindMapId?: boolean
    parentId?: boolean
    content?: boolean
    positionX?: boolean
    positionY?: boolean
    direction?: boolean
    createdBy?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "mindMapId" | "parentId" | "content" | "positionX" | "positionY" | "direction" | "createdBy" | "createdAt" | "updatedAt", ExtArgs["result"]["node"]>
  export type NodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
    parent?: boolean | Node$parentArgs<ExtArgs>
    children?: boolean | Node$childrenArgs<ExtArgs>
    _count?: boolean | NodeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
    parent?: boolean | Node$parentArgs<ExtArgs>
  }
  export type NodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    mindMap?: boolean | MindMapDefaultArgs<ExtArgs>
    parent?: boolean | Node$parentArgs<ExtArgs>
  }

  export type $NodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Node"
    objects: {
      mindMap: Prisma.$MindMapPayload<ExtArgs>
      parent: Prisma.$NodePayload<ExtArgs> | null
      children: Prisma.$NodePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mindMapId: string
      parentId: string | null
      content: string
      positionX: number
      positionY: number
      direction: $Enums.Direction
      createdBy: $Enums.NodeSource
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["node"]>
    composites: {}
  }

  type NodeGetPayload<S extends boolean | null | undefined | NodeDefaultArgs> = $Result.GetResult<Prisma.$NodePayload, S>

  type NodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NodeCountAggregateInputType | true
    }

  export interface NodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Node'], meta: { name: 'Node' } }
    /**
     * Find zero or one Node that matches the filter.
     * @param {NodeFindUniqueArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodeFindUniqueArgs>(args: SelectSubset<T, NodeFindUniqueArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Node that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NodeFindUniqueOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodeFindUniqueOrThrowArgs>(args: SelectSubset<T, NodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Node that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodeFindFirstArgs>(args?: SelectSubset<T, NodeFindFirstArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Node that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodeFindFirstOrThrowArgs>(args?: SelectSubset<T, NodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nodes
     * const nodes = await prisma.node.findMany()
     * 
     * // Get first 10 Nodes
     * const nodes = await prisma.node.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodeWithIdOnly = await prisma.node.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodeFindManyArgs>(args?: SelectSubset<T, NodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Node.
     * @param {NodeCreateArgs} args - Arguments to create a Node.
     * @example
     * // Create one Node
     * const Node = await prisma.node.create({
     *   data: {
     *     // ... data to create a Node
     *   }
     * })
     * 
     */
    create<T extends NodeCreateArgs>(args: SelectSubset<T, NodeCreateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nodes.
     * @param {NodeCreateManyArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodeCreateManyArgs>(args?: SelectSubset<T, NodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nodes and returns the data saved in the database.
     * @param {NodeCreateManyAndReturnArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nodes and only return the `id`
     * const nodeWithIdOnly = await prisma.node.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodeCreateManyAndReturnArgs>(args?: SelectSubset<T, NodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Node.
     * @param {NodeDeleteArgs} args - Arguments to delete one Node.
     * @example
     * // Delete one Node
     * const Node = await prisma.node.delete({
     *   where: {
     *     // ... filter to delete one Node
     *   }
     * })
     * 
     */
    delete<T extends NodeDeleteArgs>(args: SelectSubset<T, NodeDeleteArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Node.
     * @param {NodeUpdateArgs} args - Arguments to update one Node.
     * @example
     * // Update one Node
     * const node = await prisma.node.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodeUpdateArgs>(args: SelectSubset<T, NodeUpdateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nodes.
     * @param {NodeDeleteManyArgs} args - Arguments to filter Nodes to delete.
     * @example
     * // Delete a few Nodes
     * const { count } = await prisma.node.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodeDeleteManyArgs>(args?: SelectSubset<T, NodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodeUpdateManyArgs>(args: SelectSubset<T, NodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes and returns the data updated in the database.
     * @param {NodeUpdateManyAndReturnArgs} args - Arguments to update many Nodes.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nodes and only return the `id`
     * const nodeWithIdOnly = await prisma.node.updateManyAndReturn({
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
    updateManyAndReturn<T extends NodeUpdateManyAndReturnArgs>(args: SelectSubset<T, NodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Node.
     * @param {NodeUpsertArgs} args - Arguments to update or create a Node.
     * @example
     * // Update or create a Node
     * const node = await prisma.node.upsert({
     *   create: {
     *     // ... data to create a Node
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Node we want to update
     *   }
     * })
     */
    upsert<T extends NodeUpsertArgs>(args: SelectSubset<T, NodeUpsertArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCountArgs} args - Arguments to filter Nodes to count.
     * @example
     * // Count the number of Nodes
     * const count = await prisma.node.count({
     *   where: {
     *     // ... the filter for the Nodes we want to count
     *   }
     * })
    **/
    count<T extends NodeCountArgs>(
      args?: Subset<T, NodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NodeAggregateArgs>(args: Subset<T, NodeAggregateArgs>): Prisma.PrismaPromise<GetNodeAggregateType<T>>

    /**
     * Group by Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeGroupByArgs} args - Group by arguments.
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
      T extends NodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodeGroupByArgs['orderBy'] }
        : { orderBy?: NodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Node model
   */
  readonly fields: NodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Node.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    mindMap<T extends MindMapDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MindMapDefaultArgs<ExtArgs>>): Prisma__MindMapClient<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    parent<T extends Node$parentArgs<ExtArgs> = {}>(args?: Subset<T, Node$parentArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    children<T extends Node$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Node$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Node model
   */
  interface NodeFieldRefs {
    readonly id: FieldRef<"Node", 'String'>
    readonly mindMapId: FieldRef<"Node", 'String'>
    readonly parentId: FieldRef<"Node", 'String'>
    readonly content: FieldRef<"Node", 'String'>
    readonly positionX: FieldRef<"Node", 'Float'>
    readonly positionY: FieldRef<"Node", 'Float'>
    readonly direction: FieldRef<"Node", 'Direction'>
    readonly createdBy: FieldRef<"Node", 'NodeSource'>
    readonly createdAt: FieldRef<"Node", 'DateTime'>
    readonly updatedAt: FieldRef<"Node", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Node findUnique
   */
  export type NodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findUniqueOrThrow
   */
  export type NodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findFirst
   */
  export type NodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findFirstOrThrow
   */
  export type NodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findMany
   */
  export type NodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Nodes to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node create
   */
  export type NodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Node.
     */
    data: XOR<NodeCreateInput, NodeUncheckedCreateInput>
  }

  /**
   * Node createMany
   */
  export type NodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Node createManyAndReturn
   */
  export type NodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Node update
   */
  export type NodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Node.
     */
    data: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
    /**
     * Choose, which Node to update.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node updateMany
   */
  export type NodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
  }

  /**
   * Node updateManyAndReturn
   */
  export type NodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Node upsert
   */
  export type NodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Node to update in case it exists.
     */
    where: NodeWhereUniqueInput
    /**
     * In case the Node found by the `where` argument doesn't exist, create a new Node with this data.
     */
    create: XOR<NodeCreateInput, NodeUncheckedCreateInput>
    /**
     * In case the Node was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
  }

  /**
   * Node delete
   */
  export type NodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter which Node to delete.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node deleteMany
   */
  export type NodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nodes to delete
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to delete.
     */
    limit?: number
  }

  /**
   * Node.parent
   */
  export type Node$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    where?: NodeWhereInput
  }

  /**
   * Node.children
   */
  export type Node$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    cursor?: NodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node without action
   */
  export type NodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
  }


  /**
   * Model SubscriptionPlan
   */

  export type AggregateSubscriptionPlan = {
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  export type SubscriptionPlanAvgAggregateOutputType = {
    price: number | null
  }

  export type SubscriptionPlanSumAggregateOutputType = {
    price: number | null
  }

  export type SubscriptionPlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    currency: string | null
    isDefault: boolean | null
  }

  export type SubscriptionPlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    currency: string | null
    isDefault: boolean | null
  }

  export type SubscriptionPlanCountAggregateOutputType = {
    id: number
    name: number
    price: number
    currency: number
    features: number
    isDefault: number
    _all: number
  }


  export type SubscriptionPlanAvgAggregateInputType = {
    price?: true
  }

  export type SubscriptionPlanSumAggregateInputType = {
    price?: true
  }

  export type SubscriptionPlanMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    currency?: true
    isDefault?: true
  }

  export type SubscriptionPlanMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    currency?: true
    isDefault?: true
  }

  export type SubscriptionPlanCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    currency?: true
    features?: true
    isDefault?: true
    _all?: true
  }

  export type SubscriptionPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlan to aggregate.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubscriptionPlans
    **/
    _count?: true | SubscriptionPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionPlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionPlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type GetSubscriptionPlanAggregateType<T extends SubscriptionPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscriptionPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
      : GetScalarType<T[P], AggregateSubscriptionPlan[P]>
  }




  export type SubscriptionPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionPlanWhereInput
    orderBy?: SubscriptionPlanOrderByWithAggregationInput | SubscriptionPlanOrderByWithAggregationInput[]
    by: SubscriptionPlanScalarFieldEnum[] | SubscriptionPlanScalarFieldEnum
    having?: SubscriptionPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionPlanCountAggregateInputType | true
    _avg?: SubscriptionPlanAvgAggregateInputType
    _sum?: SubscriptionPlanSumAggregateInputType
    _min?: SubscriptionPlanMinAggregateInputType
    _max?: SubscriptionPlanMaxAggregateInputType
  }

  export type SubscriptionPlanGroupByOutputType = {
    id: string
    name: string
    price: number
    currency: string
    features: string[]
    isDefault: boolean
    _count: SubscriptionPlanCountAggregateOutputType | null
    _avg: SubscriptionPlanAvgAggregateOutputType | null
    _sum: SubscriptionPlanSumAggregateOutputType | null
    _min: SubscriptionPlanMinAggregateOutputType | null
    _max: SubscriptionPlanMaxAggregateOutputType | null
  }

  type GetSubscriptionPlanGroupByPayload<T extends SubscriptionPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionPlanGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    currency?: boolean
    features?: boolean
    isDefault?: boolean
    UserSubscription?: boolean | SubscriptionPlan$UserSubscriptionArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    currency?: boolean
    features?: boolean
    isDefault?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    currency?: boolean
    features?: boolean
    isDefault?: boolean
  }, ExtArgs["result"]["subscriptionPlan"]>

  export type SubscriptionPlanSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    currency?: boolean
    features?: boolean
    isDefault?: boolean
  }

  export type SubscriptionPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "currency" | "features" | "isDefault", ExtArgs["result"]["subscriptionPlan"]>
  export type SubscriptionPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserSubscription?: boolean | SubscriptionPlan$UserSubscriptionArgs<ExtArgs>
    _count?: boolean | SubscriptionPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubscriptionPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SubscriptionPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubscriptionPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubscriptionPlan"
    objects: {
      UserSubscription: Prisma.$UserSubscriptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      currency: string
      features: string[]
      isDefault: boolean
    }, ExtArgs["result"]["subscriptionPlan"]>
    composites: {}
  }

  type SubscriptionPlanGetPayload<S extends boolean | null | undefined | SubscriptionPlanDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPlanPayload, S>

  type SubscriptionPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionPlanCountAggregateInputType | true
    }

  export interface SubscriptionPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubscriptionPlan'], meta: { name: 'SubscriptionPlan' } }
    /**
     * Find zero or one SubscriptionPlan that matches the filter.
     * @param {SubscriptionPlanFindUniqueArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionPlanFindUniqueArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubscriptionPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionPlanFindUniqueOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionPlanFindFirstArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubscriptionPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindFirstOrThrowArgs} args - Arguments to find a SubscriptionPlan
     * @example
     * // Get one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubscriptionPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany()
     * 
     * // Get first 10 SubscriptionPlans
     * const subscriptionPlans = await prisma.subscriptionPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionPlanFindManyArgs>(args?: SelectSubset<T, SubscriptionPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubscriptionPlan.
     * @param {SubscriptionPlanCreateArgs} args - Arguments to create a SubscriptionPlan.
     * @example
     * // Create one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.create({
     *   data: {
     *     // ... data to create a SubscriptionPlan
     *   }
     * })
     * 
     */
    create<T extends SubscriptionPlanCreateArgs>(args: SelectSubset<T, SubscriptionPlanCreateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubscriptionPlans.
     * @param {SubscriptionPlanCreateManyArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionPlanCreateManyArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubscriptionPlans and returns the data saved in the database.
     * @param {SubscriptionPlanCreateManyAndReturnArgs} args - Arguments to create many SubscriptionPlans.
     * @example
     * // Create many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubscriptionPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, SubscriptionPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubscriptionPlan.
     * @param {SubscriptionPlanDeleteArgs} args - Arguments to delete one SubscriptionPlan.
     * @example
     * // Delete one SubscriptionPlan
     * const SubscriptionPlan = await prisma.subscriptionPlan.delete({
     *   where: {
     *     // ... filter to delete one SubscriptionPlan
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionPlanDeleteArgs>(args: SelectSubset<T, SubscriptionPlanDeleteArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubscriptionPlan.
     * @param {SubscriptionPlanUpdateArgs} args - Arguments to update one SubscriptionPlan.
     * @example
     * // Update one SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionPlanUpdateArgs>(args: SelectSubset<T, SubscriptionPlanUpdateArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubscriptionPlans.
     * @param {SubscriptionPlanDeleteManyArgs} args - Arguments to filter SubscriptionPlans to delete.
     * @example
     * // Delete a few SubscriptionPlans
     * const { count } = await prisma.subscriptionPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionPlanDeleteManyArgs>(args?: SelectSubset<T, SubscriptionPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionPlanUpdateManyArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubscriptionPlans and returns the data updated in the database.
     * @param {SubscriptionPlanUpdateManyAndReturnArgs} args - Arguments to update many SubscriptionPlans.
     * @example
     * // Update many SubscriptionPlans
     * const subscriptionPlan = await prisma.subscriptionPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubscriptionPlans and only return the `id`
     * const subscriptionPlanWithIdOnly = await prisma.subscriptionPlan.updateManyAndReturn({
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
    updateManyAndReturn<T extends SubscriptionPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubscriptionPlan.
     * @param {SubscriptionPlanUpsertArgs} args - Arguments to update or create a SubscriptionPlan.
     * @example
     * // Update or create a SubscriptionPlan
     * const subscriptionPlan = await prisma.subscriptionPlan.upsert({
     *   create: {
     *     // ... data to create a SubscriptionPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubscriptionPlan we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionPlanUpsertArgs>(args: SelectSubset<T, SubscriptionPlanUpsertArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubscriptionPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanCountArgs} args - Arguments to filter SubscriptionPlans to count.
     * @example
     * // Count the number of SubscriptionPlans
     * const count = await prisma.subscriptionPlan.count({
     *   where: {
     *     // ... the filter for the SubscriptionPlans we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionPlanCountArgs>(
      args?: Subset<T, SubscriptionPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionPlanAggregateArgs>(args: Subset<T, SubscriptionPlanAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionPlanAggregateType<T>>

    /**
     * Group by SubscriptionPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionPlanGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionPlanGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionPlanGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubscriptionPlan model
   */
  readonly fields: SubscriptionPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubscriptionPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserSubscription<T extends SubscriptionPlan$UserSubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlan$UserSubscriptionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SubscriptionPlan model
   */
  interface SubscriptionPlanFieldRefs {
    readonly id: FieldRef<"SubscriptionPlan", 'String'>
    readonly name: FieldRef<"SubscriptionPlan", 'String'>
    readonly price: FieldRef<"SubscriptionPlan", 'Float'>
    readonly currency: FieldRef<"SubscriptionPlan", 'String'>
    readonly features: FieldRef<"SubscriptionPlan", 'String[]'>
    readonly isDefault: FieldRef<"SubscriptionPlan", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * SubscriptionPlan findUnique
   */
  export type SubscriptionPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findUniqueOrThrow
   */
  export type SubscriptionPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan findFirst
   */
  export type SubscriptionPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findFirstOrThrow
   */
  export type SubscriptionPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlan to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubscriptionPlans.
     */
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan findMany
   */
  export type SubscriptionPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter, which SubscriptionPlans to fetch.
     */
    where?: SubscriptionPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubscriptionPlans to fetch.
     */
    orderBy?: SubscriptionPlanOrderByWithRelationInput | SubscriptionPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubscriptionPlans.
     */
    cursor?: SubscriptionPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubscriptionPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubscriptionPlans.
     */
    skip?: number
    distinct?: SubscriptionPlanScalarFieldEnum | SubscriptionPlanScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan create
   */
  export type SubscriptionPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
  }

  /**
   * SubscriptionPlan createMany
   */
  export type SubscriptionPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan createManyAndReturn
   */
  export type SubscriptionPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to create many SubscriptionPlans.
     */
    data: SubscriptionPlanCreateManyInput | SubscriptionPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubscriptionPlan update
   */
  export type SubscriptionPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a SubscriptionPlan.
     */
    data: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
    /**
     * Choose, which SubscriptionPlan to update.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan updateMany
   */
  export type SubscriptionPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan updateManyAndReturn
   */
  export type SubscriptionPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * The data used to update SubscriptionPlans.
     */
    data: XOR<SubscriptionPlanUpdateManyMutationInput, SubscriptionPlanUncheckedUpdateManyInput>
    /**
     * Filter which SubscriptionPlans to update
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to update.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan upsert
   */
  export type SubscriptionPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the SubscriptionPlan to update in case it exists.
     */
    where: SubscriptionPlanWhereUniqueInput
    /**
     * In case the SubscriptionPlan found by the `where` argument doesn't exist, create a new SubscriptionPlan with this data.
     */
    create: XOR<SubscriptionPlanCreateInput, SubscriptionPlanUncheckedCreateInput>
    /**
     * In case the SubscriptionPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionPlanUpdateInput, SubscriptionPlanUncheckedUpdateInput>
  }

  /**
   * SubscriptionPlan delete
   */
  export type SubscriptionPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
    /**
     * Filter which SubscriptionPlan to delete.
     */
    where: SubscriptionPlanWhereUniqueInput
  }

  /**
   * SubscriptionPlan deleteMany
   */
  export type SubscriptionPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubscriptionPlans to delete
     */
    where?: SubscriptionPlanWhereInput
    /**
     * Limit how many SubscriptionPlans to delete.
     */
    limit?: number
  }

  /**
   * SubscriptionPlan.UserSubscription
   */
  export type SubscriptionPlan$UserSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    cursor?: UserSubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * SubscriptionPlan without action
   */
  export type SubscriptionPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionPlan
     */
    select?: SubscriptionPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubscriptionPlan
     */
    omit?: SubscriptionPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionPlanInclude<ExtArgs> | null
  }


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
    email: string | null
    name: string | null
    isProfileSetup: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    isProfileSetup: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    isProfileSetup: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isProfileSetup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isProfileSetup?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    isProfileSetup?: true
    createdAt?: true
    updatedAt?: true
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
    email: string
    name: string
    isProfileSetup: boolean
    createdAt: Date
    updatedAt: Date
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
    email?: boolean
    name?: boolean
    isProfileSetup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Chat?: boolean | User$ChatArgs<ExtArgs>
    MindMap?: boolean | User$MindMapArgs<ExtArgs>
    UserSubscription?: boolean | User$UserSubscriptionArgs<ExtArgs>
    TeamMember?: boolean | User$TeamMemberArgs<ExtArgs>
    workspace?: boolean | User$workspaceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isProfileSetup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    isProfileSetup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    isProfileSetup?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name" | "isProfileSetup" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Chat?: boolean | User$ChatArgs<ExtArgs>
    MindMap?: boolean | User$MindMapArgs<ExtArgs>
    UserSubscription?: boolean | User$UserSubscriptionArgs<ExtArgs>
    TeamMember?: boolean | User$TeamMemberArgs<ExtArgs>
    workspace?: boolean | User$workspaceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Chat: Prisma.$ChatPayload<ExtArgs>[]
      MindMap: Prisma.$MindMapPayload<ExtArgs>[]
      UserSubscription: Prisma.$UserSubscriptionPayload<ExtArgs> | null
      TeamMember: Prisma.$TeamMemberPayload<ExtArgs>[]
      workspace: Prisma.$WorkspacePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string
      isProfileSetup: boolean
      createdAt: Date
      updatedAt: Date
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
    Chat<T extends User$ChatArgs<ExtArgs> = {}>(args?: Subset<T, User$ChatArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    MindMap<T extends User$MindMapArgs<ExtArgs> = {}>(args?: Subset<T, User$MindMapArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MindMapPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserSubscription<T extends User$UserSubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$UserSubscriptionArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    TeamMember<T extends User$TeamMemberArgs<ExtArgs> = {}>(args?: Subset<T, User$TeamMemberArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeamMemberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace<T extends User$workspaceArgs<ExtArgs> = {}>(args?: Subset<T, User$workspaceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly isProfileSetup: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
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
   * User.Chat
   */
  export type User$ChatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Chat
     */
    omit?: ChatOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    cursor?: ChatWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * User.MindMap
   */
  export type User$MindMapArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MindMap
     */
    select?: MindMapSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MindMap
     */
    omit?: MindMapOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MindMapInclude<ExtArgs> | null
    where?: MindMapWhereInput
    orderBy?: MindMapOrderByWithRelationInput | MindMapOrderByWithRelationInput[]
    cursor?: MindMapWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MindMapScalarFieldEnum | MindMapScalarFieldEnum[]
  }

  /**
   * User.UserSubscription
   */
  export type User$UserSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    where?: UserSubscriptionWhereInput
  }

  /**
   * User.TeamMember
   */
  export type User$TeamMemberArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeamMember
     */
    select?: TeamMemberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TeamMember
     */
    omit?: TeamMemberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeamMemberInclude<ExtArgs> | null
    where?: TeamMemberWhereInput
    orderBy?: TeamMemberOrderByWithRelationInput | TeamMemberOrderByWithRelationInput[]
    cursor?: TeamMemberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeamMemberScalarFieldEnum | TeamMemberScalarFieldEnum[]
  }

  /**
   * User.workspace
   */
  export type User$workspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workspace
     */
    omit?: WorkspaceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    cursor?: WorkspaceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
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
   * Model UserSubscription
   */

  export type AggregateUserSubscription = {
    _count: UserSubscriptionCountAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  export type UserSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    startedAt: Date | null
    expiresAt: Date | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
  }

  export type UserSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    planId: string | null
    startedAt: Date | null
    expiresAt: Date | null
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
  }

  export type UserSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    planId: number
    startedAt: number
    expiresAt: number
    stripeCustomerId: number
    stripeSubscriptionId: number
    _all: number
  }


  export type UserSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    startedAt?: true
    expiresAt?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
  }

  export type UserSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    startedAt?: true
    expiresAt?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
  }

  export type UserSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    planId?: true
    startedAt?: true
    expiresAt?: true
    stripeCustomerId?: true
    stripeSubscriptionId?: true
    _all?: true
  }

  export type UserSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscription to aggregate.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserSubscriptions
    **/
    _count?: true | UserSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type GetUserSubscriptionAggregateType<T extends UserSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserSubscription[P]>
      : GetScalarType<T[P], AggregateUserSubscription[P]>
  }




  export type UserSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserSubscriptionWhereInput
    orderBy?: UserSubscriptionOrderByWithAggregationInput | UserSubscriptionOrderByWithAggregationInput[]
    by: UserSubscriptionScalarFieldEnum[] | UserSubscriptionScalarFieldEnum
    having?: UserSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserSubscriptionCountAggregateInputType | true
    _min?: UserSubscriptionMinAggregateInputType
    _max?: UserSubscriptionMaxAggregateInputType
  }

  export type UserSubscriptionGroupByOutputType = {
    id: string
    userId: string
    planId: string
    startedAt: Date
    expiresAt: Date
    stripeCustomerId: string | null
    stripeSubscriptionId: string | null
    _count: UserSubscriptionCountAggregateOutputType | null
    _min: UserSubscriptionMinAggregateOutputType | null
    _max: UserSubscriptionMaxAggregateOutputType | null
  }

  type GetUserSubscriptionGroupByPayload<T extends UserSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], UserSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type UserSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    SubscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    SubscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    planId?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
    SubscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userSubscription"]>

  export type UserSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    planId?: boolean
    startedAt?: boolean
    expiresAt?: boolean
    stripeCustomerId?: boolean
    stripeSubscriptionId?: boolean
  }

  export type UserSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "planId" | "startedAt" | "expiresAt" | "stripeCustomerId" | "stripeSubscriptionId", ExtArgs["result"]["userSubscription"]>
  export type UserSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SubscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SubscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    SubscriptionPlan?: boolean | SubscriptionPlanDefaultArgs<ExtArgs>
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserSubscription"
    objects: {
      SubscriptionPlan: Prisma.$SubscriptionPlanPayload<ExtArgs>
      User: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      planId: string
      startedAt: Date
      expiresAt: Date
      stripeCustomerId: string | null
      stripeSubscriptionId: string | null
    }, ExtArgs["result"]["userSubscription"]>
    composites: {}
  }

  type UserSubscriptionGetPayload<S extends boolean | null | undefined | UserSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$UserSubscriptionPayload, S>

  type UserSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserSubscriptionCountAggregateInputType | true
    }

  export interface UserSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserSubscription'], meta: { name: 'UserSubscription' } }
    /**
     * Find zero or one UserSubscription that matches the filter.
     * @param {UserSubscriptionFindUniqueArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserSubscriptionFindUniqueArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserSubscriptionFindFirstArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindFirstOrThrowArgs} args - Arguments to find a UserSubscription
     * @example
     * // Get one UserSubscription
     * const userSubscription = await prisma.userSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany()
     * 
     * // Get first 10 UserSubscriptions
     * const userSubscriptions = await prisma.userSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserSubscriptionFindManyArgs>(args?: SelectSubset<T, UserSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserSubscription.
     * @param {UserSubscriptionCreateArgs} args - Arguments to create a UserSubscription.
     * @example
     * // Create one UserSubscription
     * const UserSubscription = await prisma.userSubscription.create({
     *   data: {
     *     // ... data to create a UserSubscription
     *   }
     * })
     * 
     */
    create<T extends UserSubscriptionCreateArgs>(args: SelectSubset<T, UserSubscriptionCreateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserSubscriptions.
     * @param {UserSubscriptionCreateManyArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserSubscriptionCreateManyArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserSubscriptions and returns the data saved in the database.
     * @param {UserSubscriptionCreateManyAndReturnArgs} args - Arguments to create many UserSubscriptions.
     * @example
     * // Create many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserSubscription.
     * @param {UserSubscriptionDeleteArgs} args - Arguments to delete one UserSubscription.
     * @example
     * // Delete one UserSubscription
     * const UserSubscription = await prisma.userSubscription.delete({
     *   where: {
     *     // ... filter to delete one UserSubscription
     *   }
     * })
     * 
     */
    delete<T extends UserSubscriptionDeleteArgs>(args: SelectSubset<T, UserSubscriptionDeleteArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserSubscription.
     * @param {UserSubscriptionUpdateArgs} args - Arguments to update one UserSubscription.
     * @example
     * // Update one UserSubscription
     * const userSubscription = await prisma.userSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserSubscriptionUpdateArgs>(args: SelectSubset<T, UserSubscriptionUpdateArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserSubscriptions.
     * @param {UserSubscriptionDeleteManyArgs} args - Arguments to filter UserSubscriptions to delete.
     * @example
     * // Delete a few UserSubscriptions
     * const { count } = await prisma.userSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserSubscriptionDeleteManyArgs>(args?: SelectSubset<T, UserSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserSubscriptionUpdateManyArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserSubscriptions and returns the data updated in the database.
     * @param {UserSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many UserSubscriptions.
     * @example
     * // Update many UserSubscriptions
     * const userSubscription = await prisma.userSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserSubscriptions and only return the `id`
     * const userSubscriptionWithIdOnly = await prisma.userSubscription.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserSubscription.
     * @param {UserSubscriptionUpsertArgs} args - Arguments to update or create a UserSubscription.
     * @example
     * // Update or create a UserSubscription
     * const userSubscription = await prisma.userSubscription.upsert({
     *   create: {
     *     // ... data to create a UserSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserSubscription we want to update
     *   }
     * })
     */
    upsert<T extends UserSubscriptionUpsertArgs>(args: SelectSubset<T, UserSubscriptionUpsertArgs<ExtArgs>>): Prisma__UserSubscriptionClient<$Result.GetResult<Prisma.$UserSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionCountArgs} args - Arguments to filter UserSubscriptions to count.
     * @example
     * // Count the number of UserSubscriptions
     * const count = await prisma.userSubscription.count({
     *   where: {
     *     // ... the filter for the UserSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends UserSubscriptionCountArgs>(
      args?: Subset<T, UserSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserSubscriptionAggregateArgs>(args: Subset<T, UserSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetUserSubscriptionAggregateType<T>>

    /**
     * Group by UserSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserSubscriptionGroupByArgs} args - Group by arguments.
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
      T extends UserSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: UserSubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserSubscription model
   */
  readonly fields: UserSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    SubscriptionPlan<T extends SubscriptionPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubscriptionPlanDefaultArgs<ExtArgs>>): Prisma__SubscriptionPlanClient<$Result.GetResult<Prisma.$SubscriptionPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserSubscription model
   */
  interface UserSubscriptionFieldRefs {
    readonly id: FieldRef<"UserSubscription", 'String'>
    readonly userId: FieldRef<"UserSubscription", 'String'>
    readonly planId: FieldRef<"UserSubscription", 'String'>
    readonly startedAt: FieldRef<"UserSubscription", 'DateTime'>
    readonly expiresAt: FieldRef<"UserSubscription", 'DateTime'>
    readonly stripeCustomerId: FieldRef<"UserSubscription", 'String'>
    readonly stripeSubscriptionId: FieldRef<"UserSubscription", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserSubscription findUnique
   */
  export type UserSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findUniqueOrThrow
   */
  export type UserSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription findFirst
   */
  export type UserSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findFirstOrThrow
   */
  export type UserSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscription to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserSubscriptions.
     */
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription findMany
   */
  export type UserSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which UserSubscriptions to fetch.
     */
    where?: UserSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserSubscriptions to fetch.
     */
    orderBy?: UserSubscriptionOrderByWithRelationInput | UserSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserSubscriptions.
     */
    cursor?: UserSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserSubscriptions.
     */
    skip?: number
    distinct?: UserSubscriptionScalarFieldEnum | UserSubscriptionScalarFieldEnum[]
  }

  /**
   * UserSubscription create
   */
  export type UserSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserSubscription.
     */
    data: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
  }

  /**
   * UserSubscription createMany
   */
  export type UserSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserSubscription createManyAndReturn
   */
  export type UserSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many UserSubscriptions.
     */
    data: UserSubscriptionCreateManyInput | UserSubscriptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription update
   */
  export type UserSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserSubscription.
     */
    data: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which UserSubscription to update.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription updateMany
   */
  export type UserSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
  }

  /**
   * UserSubscription updateManyAndReturn
   */
  export type UserSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update UserSubscriptions.
     */
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which UserSubscriptions to update
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserSubscription upsert
   */
  export type UserSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserSubscription to update in case it exists.
     */
    where: UserSubscriptionWhereUniqueInput
    /**
     * In case the UserSubscription found by the `where` argument doesn't exist, create a new UserSubscription with this data.
     */
    create: XOR<UserSubscriptionCreateInput, UserSubscriptionUncheckedCreateInput>
    /**
     * In case the UserSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserSubscriptionUpdateInput, UserSubscriptionUncheckedUpdateInput>
  }

  /**
   * UserSubscription delete
   */
  export type UserSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which UserSubscription to delete.
     */
    where: UserSubscriptionWhereUniqueInput
  }

  /**
   * UserSubscription deleteMany
   */
  export type UserSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserSubscriptions to delete
     */
    where?: UserSubscriptionWhereInput
    /**
     * Limit how many UserSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * UserSubscription without action
   */
  export type UserSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserSubscription
     */
    select?: UserSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserSubscription
     */
    omit?: UserSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserSubscriptionInclude<ExtArgs> | null
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


  export const MessageScalarFieldEnum: {
    id: 'id',
    chatId: 'chatId',
    role: 'role',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const MindMapScalarFieldEnum: {
    id: 'id',
    title: 'title',
    workspaceId: 'workspaceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    isPublic: 'isPublic',
    generatedBy: 'generatedBy',
    chatId: 'chatId'
  };

  export type MindMapScalarFieldEnum = (typeof MindMapScalarFieldEnum)[keyof typeof MindMapScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    mindMapId: 'mindMapId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const TeamScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    workspaceId: 'workspaceId'
  };

  export type TeamScalarFieldEnum = (typeof TeamScalarFieldEnum)[keyof typeof TeamScalarFieldEnum]


  export const TeamMemberScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    teamId: 'teamId',
    role: 'role',
    joinedAt: 'joinedAt'
  };

  export type TeamMemberScalarFieldEnum = (typeof TeamMemberScalarFieldEnum)[keyof typeof TeamMemberScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const FlowchartScalarFieldEnum: {
    id: 'id',
    title: 'title',
    workspaceId: 'workspaceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlowchartScalarFieldEnum = (typeof FlowchartScalarFieldEnum)[keyof typeof FlowchartScalarFieldEnum]


  export const WhiteboardScalarFieldEnum: {
    id: 'id',
    title: 'title',
    workspaceId: 'workspaceId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WhiteboardScalarFieldEnum = (typeof WhiteboardScalarFieldEnum)[keyof typeof WhiteboardScalarFieldEnum]


  export const NodeScalarFieldEnum: {
    id: 'id',
    mindMapId: 'mindMapId',
    parentId: 'parentId',
    content: 'content',
    positionX: 'positionX',
    positionY: 'positionY',
    direction: 'direction',
    createdBy: 'createdBy',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NodeScalarFieldEnum = (typeof NodeScalarFieldEnum)[keyof typeof NodeScalarFieldEnum]


  export const SubscriptionPlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    currency: 'currency',
    features: 'features',
    isDefault: 'isDefault'
  };

  export type SubscriptionPlanScalarFieldEnum = (typeof SubscriptionPlanScalarFieldEnum)[keyof typeof SubscriptionPlanScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    isProfileSetup: 'isProfileSetup',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    planId: 'planId',
    startedAt: 'startedAt',
    expiresAt: 'expiresAt',
    stripeCustomerId: 'stripeCustomerId',
    stripeSubscriptionId: 'stripeSubscriptionId'
  };

  export type UserSubscriptionScalarFieldEnum = (typeof UserSubscriptionScalarFieldEnum)[keyof typeof UserSubscriptionScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Reference to a field of type 'GeneratedBy'
   */
  export type EnumGeneratedByFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GeneratedBy'>
    


  /**
   * Reference to a field of type 'GeneratedBy[]'
   */
  export type ListEnumGeneratedByFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'GeneratedBy[]'>
    


  /**
   * Reference to a field of type 'TeamRole'
   */
  export type EnumTeamRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamRole'>
    


  /**
   * Reference to a field of type 'TeamRole[]'
   */
  export type ListEnumTeamRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TeamRole[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Direction'
   */
  export type EnumDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Direction'>
    


  /**
   * Reference to a field of type 'Direction[]'
   */
  export type ListEnumDirectionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Direction[]'>
    


  /**
   * Reference to a field of type 'NodeSource'
   */
  export type EnumNodeSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NodeSource'>
    


  /**
   * Reference to a field of type 'NodeSource[]'
   */
  export type ListEnumNodeSourceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NodeSource[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    role?: EnumRoleFilter<"Message"> | $Enums.Role
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    Chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    chatId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    Chat?: ChatOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    chatId?: StringFilter<"Message"> | string
    role?: EnumRoleFilter<"Message"> | $Enums.Role
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
    Chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    chatId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    chatId?: StringWithAggregatesFilter<"Message"> | string
    role?: EnumRoleWithAggregatesFilter<"Message"> | $Enums.Role
    content?: StringWithAggregatesFilter<"Message"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type MindMapWhereInput = {
    AND?: MindMapWhereInput | MindMapWhereInput[]
    OR?: MindMapWhereInput[]
    NOT?: MindMapWhereInput | MindMapWhereInput[]
    id?: StringFilter<"MindMap"> | string
    title?: StringFilter<"MindMap"> | string
    workspaceId?: StringFilter<"MindMap"> | string
    createdAt?: DateTimeFilter<"MindMap"> | Date | string
    updatedAt?: DateTimeFilter<"MindMap"> | Date | string
    userId?: StringFilter<"MindMap"> | string
    isPublic?: BoolFilter<"MindMap"> | boolean
    generatedBy?: EnumGeneratedByFilter<"MindMap"> | $Enums.GeneratedBy
    chatId?: StringNullableFilter<"MindMap"> | string | null
    Chat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    nodes?: NodeListRelationFilter
  }

  export type MindMapOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    generatedBy?: SortOrder
    chatId?: SortOrderInput | SortOrder
    Chat?: ChatOrderByWithRelationInput
    workspace?: WorkspaceOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
    nodes?: NodeOrderByRelationAggregateInput
  }

  export type MindMapWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    chatId?: string
    AND?: MindMapWhereInput | MindMapWhereInput[]
    OR?: MindMapWhereInput[]
    NOT?: MindMapWhereInput | MindMapWhereInput[]
    title?: StringFilter<"MindMap"> | string
    workspaceId?: StringFilter<"MindMap"> | string
    createdAt?: DateTimeFilter<"MindMap"> | Date | string
    updatedAt?: DateTimeFilter<"MindMap"> | Date | string
    userId?: StringFilter<"MindMap"> | string
    isPublic?: BoolFilter<"MindMap"> | boolean
    generatedBy?: EnumGeneratedByFilter<"MindMap"> | $Enums.GeneratedBy
    Chat?: XOR<ChatNullableScalarRelationFilter, ChatWhereInput> | null
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    nodes?: NodeListRelationFilter
  }, "id" | "chatId">

  export type MindMapOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    generatedBy?: SortOrder
    chatId?: SortOrderInput | SortOrder
    _count?: MindMapCountOrderByAggregateInput
    _max?: MindMapMaxOrderByAggregateInput
    _min?: MindMapMinOrderByAggregateInput
  }

  export type MindMapScalarWhereWithAggregatesInput = {
    AND?: MindMapScalarWhereWithAggregatesInput | MindMapScalarWhereWithAggregatesInput[]
    OR?: MindMapScalarWhereWithAggregatesInput[]
    NOT?: MindMapScalarWhereWithAggregatesInput | MindMapScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MindMap"> | string
    title?: StringWithAggregatesFilter<"MindMap"> | string
    workspaceId?: StringWithAggregatesFilter<"MindMap"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MindMap"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MindMap"> | Date | string
    userId?: StringWithAggregatesFilter<"MindMap"> | string
    isPublic?: BoolWithAggregatesFilter<"MindMap"> | boolean
    generatedBy?: EnumGeneratedByWithAggregatesFilter<"MindMap"> | $Enums.GeneratedBy
    chatId?: StringNullableWithAggregatesFilter<"MindMap"> | string | null
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    userId?: StringNullableFilter<"Chat"> | string | null
    mindMapId?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mindMap?: XOR<MindMapScalarRelationFilter, MindMapWhereInput>
    Message?: MessageListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    mindMapId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    mindMap?: MindMapOrderByWithRelationInput
    Message?: MessageOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    mindMapId?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    userId?: StringNullableFilter<"Chat"> | string | null
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    mindMap?: XOR<MindMapScalarRelationFilter, MindMapWhereInput>
    Message?: MessageListRelationFilter
  }, "id" | "mindMapId">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    mindMapId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
    userId?: StringNullableWithAggregatesFilter<"Chat"> | string | null
    mindMapId?: StringWithAggregatesFilter<"Chat"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Chat"> | Date | string
  }

  export type TeamWhereInput = {
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    workspaceId?: StringFilter<"Team"> | string
    members?: TeamMemberListRelationFilter
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type TeamOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    members?: TeamMemberOrderByRelationAggregateInput
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type TeamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TeamWhereInput | TeamWhereInput[]
    OR?: TeamWhereInput[]
    NOT?: TeamWhereInput | TeamWhereInput[]
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    workspaceId?: StringFilter<"Team"> | string
    members?: TeamMemberListRelationFilter
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type TeamOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
    _count?: TeamCountOrderByAggregateInput
    _max?: TeamMaxOrderByAggregateInput
    _min?: TeamMinOrderByAggregateInput
  }

  export type TeamScalarWhereWithAggregatesInput = {
    AND?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    OR?: TeamScalarWhereWithAggregatesInput[]
    NOT?: TeamScalarWhereWithAggregatesInput | TeamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Team"> | string
    name?: StringWithAggregatesFilter<"Team"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Team"> | Date | string
    workspaceId?: StringWithAggregatesFilter<"Team"> | string
  }

  export type TeamMemberWhereInput = {
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    role?: EnumTeamRoleFilter<"TeamMember"> | $Enums.TeamRole
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }

  export type TeamMemberOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    team?: TeamOrderByWithRelationInput
  }

  export type TeamMemberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_teamId?: TeamMemberUserIdTeamIdCompoundUniqueInput
    AND?: TeamMemberWhereInput | TeamMemberWhereInput[]
    OR?: TeamMemberWhereInput[]
    NOT?: TeamMemberWhereInput | TeamMemberWhereInput[]
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    role?: EnumTeamRoleFilter<"TeamMember"> | $Enums.TeamRole
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    team?: XOR<TeamScalarRelationFilter, TeamWhereInput>
  }, "id" | "userId_teamId">

  export type TeamMemberOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
    _count?: TeamMemberCountOrderByAggregateInput
    _max?: TeamMemberMaxOrderByAggregateInput
    _min?: TeamMemberMinOrderByAggregateInput
  }

  export type TeamMemberScalarWhereWithAggregatesInput = {
    AND?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    OR?: TeamMemberScalarWhereWithAggregatesInput[]
    NOT?: TeamMemberScalarWhereWithAggregatesInput | TeamMemberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TeamMember"> | string
    userId?: StringWithAggregatesFilter<"TeamMember"> | string
    teamId?: StringWithAggregatesFilter<"TeamMember"> | string
    role?: EnumTeamRoleWithAggregatesFilter<"TeamMember"> | $Enums.TeamRole
    joinedAt?: DateTimeWithAggregatesFilter<"TeamMember"> | Date | string
  }

  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    userId?: StringNullableFilter<"Workspace"> | string | null
    teams?: TeamListRelationFilter
    mindmaps?: MindMapListRelationFilter
    flowcharts?: FlowchartListRelationFilter
    whiteboards?: WhiteboardListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    teams?: TeamOrderByRelationAggregateInput
    mindmaps?: MindMapOrderByRelationAggregateInput
    flowcharts?: FlowchartOrderByRelationAggregateInput
    whiteboards?: WhiteboardOrderByRelationAggregateInput
    User?: UserOrderByWithRelationInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    userId?: StringNullableFilter<"Workspace"> | string | null
    teams?: TeamListRelationFilter
    mindmaps?: MindMapListRelationFilter
    flowcharts?: FlowchartListRelationFilter
    whiteboards?: WhiteboardListRelationFilter
    User?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringWithAggregatesFilter<"Workspace"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    userId?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
  }

  export type FlowchartWhereInput = {
    AND?: FlowchartWhereInput | FlowchartWhereInput[]
    OR?: FlowchartWhereInput[]
    NOT?: FlowchartWhereInput | FlowchartWhereInput[]
    id?: StringFilter<"Flowchart"> | string
    title?: StringFilter<"Flowchart"> | string
    workspaceId?: StringFilter<"Flowchart"> | string
    createdAt?: DateTimeFilter<"Flowchart"> | Date | string
    updatedAt?: DateTimeFilter<"Flowchart"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type FlowchartOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type FlowchartWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FlowchartWhereInput | FlowchartWhereInput[]
    OR?: FlowchartWhereInput[]
    NOT?: FlowchartWhereInput | FlowchartWhereInput[]
    title?: StringFilter<"Flowchart"> | string
    workspaceId?: StringFilter<"Flowchart"> | string
    createdAt?: DateTimeFilter<"Flowchart"> | Date | string
    updatedAt?: DateTimeFilter<"Flowchart"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type FlowchartOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlowchartCountOrderByAggregateInput
    _max?: FlowchartMaxOrderByAggregateInput
    _min?: FlowchartMinOrderByAggregateInput
  }

  export type FlowchartScalarWhereWithAggregatesInput = {
    AND?: FlowchartScalarWhereWithAggregatesInput | FlowchartScalarWhereWithAggregatesInput[]
    OR?: FlowchartScalarWhereWithAggregatesInput[]
    NOT?: FlowchartScalarWhereWithAggregatesInput | FlowchartScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Flowchart"> | string
    title?: StringWithAggregatesFilter<"Flowchart"> | string
    workspaceId?: StringWithAggregatesFilter<"Flowchart"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Flowchart"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Flowchart"> | Date | string
  }

  export type WhiteboardWhereInput = {
    AND?: WhiteboardWhereInput | WhiteboardWhereInput[]
    OR?: WhiteboardWhereInput[]
    NOT?: WhiteboardWhereInput | WhiteboardWhereInput[]
    id?: StringFilter<"Whiteboard"> | string
    title?: StringFilter<"Whiteboard"> | string
    workspaceId?: StringFilter<"Whiteboard"> | string
    createdAt?: DateTimeFilter<"Whiteboard"> | Date | string
    updatedAt?: DateTimeFilter<"Whiteboard"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }

  export type WhiteboardOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type WhiteboardWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WhiteboardWhereInput | WhiteboardWhereInput[]
    OR?: WhiteboardWhereInput[]
    NOT?: WhiteboardWhereInput | WhiteboardWhereInput[]
    title?: StringFilter<"Whiteboard"> | string
    workspaceId?: StringFilter<"Whiteboard"> | string
    createdAt?: DateTimeFilter<"Whiteboard"> | Date | string
    updatedAt?: DateTimeFilter<"Whiteboard"> | Date | string
    workspace?: XOR<WorkspaceScalarRelationFilter, WorkspaceWhereInput>
  }, "id">

  export type WhiteboardOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WhiteboardCountOrderByAggregateInput
    _max?: WhiteboardMaxOrderByAggregateInput
    _min?: WhiteboardMinOrderByAggregateInput
  }

  export type WhiteboardScalarWhereWithAggregatesInput = {
    AND?: WhiteboardScalarWhereWithAggregatesInput | WhiteboardScalarWhereWithAggregatesInput[]
    OR?: WhiteboardScalarWhereWithAggregatesInput[]
    NOT?: WhiteboardScalarWhereWithAggregatesInput | WhiteboardScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Whiteboard"> | string
    title?: StringWithAggregatesFilter<"Whiteboard"> | string
    workspaceId?: StringWithAggregatesFilter<"Whiteboard"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Whiteboard"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Whiteboard"> | Date | string
  }

  export type NodeWhereInput = {
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    id?: StringFilter<"Node"> | string
    mindMapId?: StringFilter<"Node"> | string
    parentId?: StringNullableFilter<"Node"> | string | null
    content?: StringFilter<"Node"> | string
    positionX?: FloatFilter<"Node"> | number
    positionY?: FloatFilter<"Node"> | number
    direction?: EnumDirectionFilter<"Node"> | $Enums.Direction
    createdBy?: EnumNodeSourceFilter<"Node"> | $Enums.NodeSource
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
    mindMap?: XOR<MindMapScalarRelationFilter, MindMapWhereInput>
    parent?: XOR<NodeNullableScalarRelationFilter, NodeWhereInput> | null
    children?: NodeListRelationFilter
  }

  export type NodeOrderByWithRelationInput = {
    id?: SortOrder
    mindMapId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    content?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    direction?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    mindMap?: MindMapOrderByWithRelationInput
    parent?: NodeOrderByWithRelationInput
    children?: NodeOrderByRelationAggregateInput
  }

  export type NodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    mindMapId?: StringFilter<"Node"> | string
    parentId?: StringNullableFilter<"Node"> | string | null
    content?: StringFilter<"Node"> | string
    positionX?: FloatFilter<"Node"> | number
    positionY?: FloatFilter<"Node"> | number
    direction?: EnumDirectionFilter<"Node"> | $Enums.Direction
    createdBy?: EnumNodeSourceFilter<"Node"> | $Enums.NodeSource
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
    mindMap?: XOR<MindMapScalarRelationFilter, MindMapWhereInput>
    parent?: XOR<NodeNullableScalarRelationFilter, NodeWhereInput> | null
    children?: NodeListRelationFilter
  }, "id">

  export type NodeOrderByWithAggregationInput = {
    id?: SortOrder
    mindMapId?: SortOrder
    parentId?: SortOrderInput | SortOrder
    content?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    direction?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NodeCountOrderByAggregateInput
    _avg?: NodeAvgOrderByAggregateInput
    _max?: NodeMaxOrderByAggregateInput
    _min?: NodeMinOrderByAggregateInput
    _sum?: NodeSumOrderByAggregateInput
  }

  export type NodeScalarWhereWithAggregatesInput = {
    AND?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    OR?: NodeScalarWhereWithAggregatesInput[]
    NOT?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Node"> | string
    mindMapId?: StringWithAggregatesFilter<"Node"> | string
    parentId?: StringNullableWithAggregatesFilter<"Node"> | string | null
    content?: StringWithAggregatesFilter<"Node"> | string
    positionX?: FloatWithAggregatesFilter<"Node"> | number
    positionY?: FloatWithAggregatesFilter<"Node"> | number
    direction?: EnumDirectionWithAggregatesFilter<"Node"> | $Enums.Direction
    createdBy?: EnumNodeSourceWithAggregatesFilter<"Node"> | $Enums.NodeSource
    createdAt?: DateTimeWithAggregatesFilter<"Node"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Node"> | Date | string
  }

  export type SubscriptionPlanWhereInput = {
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    id?: StringFilter<"SubscriptionPlan"> | string
    name?: StringFilter<"SubscriptionPlan"> | string
    price?: FloatFilter<"SubscriptionPlan"> | number
    currency?: StringFilter<"SubscriptionPlan"> | string
    features?: StringNullableListFilter<"SubscriptionPlan">
    isDefault?: BoolFilter<"SubscriptionPlan"> | boolean
    UserSubscription?: UserSubscriptionListRelationFilter
  }

  export type SubscriptionPlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    features?: SortOrder
    isDefault?: SortOrder
    UserSubscription?: UserSubscriptionOrderByRelationAggregateInput
  }

  export type SubscriptionPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    OR?: SubscriptionPlanWhereInput[]
    NOT?: SubscriptionPlanWhereInput | SubscriptionPlanWhereInput[]
    name?: StringFilter<"SubscriptionPlan"> | string
    price?: FloatFilter<"SubscriptionPlan"> | number
    currency?: StringFilter<"SubscriptionPlan"> | string
    features?: StringNullableListFilter<"SubscriptionPlan">
    isDefault?: BoolFilter<"SubscriptionPlan"> | boolean
    UserSubscription?: UserSubscriptionListRelationFilter
  }, "id">

  export type SubscriptionPlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    features?: SortOrder
    isDefault?: SortOrder
    _count?: SubscriptionPlanCountOrderByAggregateInput
    _avg?: SubscriptionPlanAvgOrderByAggregateInput
    _max?: SubscriptionPlanMaxOrderByAggregateInput
    _min?: SubscriptionPlanMinOrderByAggregateInput
    _sum?: SubscriptionPlanSumOrderByAggregateInput
  }

  export type SubscriptionPlanScalarWhereWithAggregatesInput = {
    AND?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    OR?: SubscriptionPlanScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionPlanScalarWhereWithAggregatesInput | SubscriptionPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    name?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    price?: FloatWithAggregatesFilter<"SubscriptionPlan"> | number
    currency?: StringWithAggregatesFilter<"SubscriptionPlan"> | string
    features?: StringNullableListFilter<"SubscriptionPlan">
    isDefault?: BoolWithAggregatesFilter<"SubscriptionPlan"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    isProfileSetup?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Chat?: ChatListRelationFilter
    MindMap?: MindMapListRelationFilter
    UserSubscription?: XOR<UserSubscriptionNullableScalarRelationFilter, UserSubscriptionWhereInput> | null
    TeamMember?: TeamMemberListRelationFilter
    workspace?: WorkspaceListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isProfileSetup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    Chat?: ChatOrderByRelationAggregateInput
    MindMap?: MindMapOrderByRelationAggregateInput
    UserSubscription?: UserSubscriptionOrderByWithRelationInput
    TeamMember?: TeamMemberOrderByRelationAggregateInput
    workspace?: WorkspaceOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    isProfileSetup?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    Chat?: ChatListRelationFilter
    MindMap?: MindMapListRelationFilter
    UserSubscription?: XOR<UserSubscriptionNullableScalarRelationFilter, UserSubscriptionWhereInput> | null
    TeamMember?: TeamMemberListRelationFilter
    workspace?: WorkspaceListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isProfileSetup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    isProfileSetup?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserSubscriptionWhereInput = {
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    planId?: StringFilter<"UserSubscription"> | string
    startedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    expiresAt?: DateTimeFilter<"UserSubscription"> | Date | string
    stripeCustomerId?: StringNullableFilter<"UserSubscription"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"UserSubscription"> | string | null
    SubscriptionPlan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    SubscriptionPlan?: SubscriptionPlanOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type UserSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    OR?: UserSubscriptionWhereInput[]
    NOT?: UserSubscriptionWhereInput | UserSubscriptionWhereInput[]
    planId?: StringFilter<"UserSubscription"> | string
    startedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    expiresAt?: DateTimeFilter<"UserSubscription"> | Date | string
    stripeCustomerId?: StringNullableFilter<"UserSubscription"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"UserSubscription"> | string | null
    SubscriptionPlan?: XOR<SubscriptionPlanScalarRelationFilter, SubscriptionPlanWhereInput>
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type UserSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    stripeCustomerId?: SortOrderInput | SortOrder
    stripeSubscriptionId?: SortOrderInput | SortOrder
    _count?: UserSubscriptionCountOrderByAggregateInput
    _max?: UserSubscriptionMaxOrderByAggregateInput
    _min?: UserSubscriptionMinOrderByAggregateInput
  }

  export type UserSubscriptionScalarWhereWithAggregatesInput = {
    AND?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    OR?: UserSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: UserSubscriptionScalarWhereWithAggregatesInput | UserSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserSubscription"> | string
    userId?: StringWithAggregatesFilter<"UserSubscription"> | string
    planId?: StringWithAggregatesFilter<"UserSubscription"> | string
    startedAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"UserSubscription"> | Date | string
    stripeCustomerId?: StringNullableWithAggregatesFilter<"UserSubscription"> | string | null
    stripeSubscriptionId?: StringNullableWithAggregatesFilter<"UserSubscription"> | string | null
  }

  export type MessageCreateInput = {
    id?: string
    role: $Enums.Role
    content: string
    createdAt?: Date | string
    Chat: ChatCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    chatId: string
    role: $Enums.Role
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUpdateOneRequiredWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    chatId: string
    role: $Enums.Role
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatId?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MindMapCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
    Chat?: ChatCreateNestedOneWithoutMindMapInput
    workspace: WorkspaceCreateNestedOneWithoutMindmapsInput
    User: UserCreateNestedOneWithoutMindMapInput
    nodes?: NodeCreateNestedManyWithoutMindMapInput
  }

  export type MindMapUncheckedCreateInput = {
    id?: string
    title: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
    Chat?: ChatUncheckedCreateNestedOneWithoutMindMapInput
    nodes?: NodeUncheckedCreateNestedManyWithoutMindMapInput
  }

  export type MindMapUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    Chat?: ChatUpdateOneWithoutMindMapNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutMindmapsNestedInput
    User?: UserUpdateOneRequiredWithoutMindMapNestedInput
    nodes?: NodeUpdateManyWithoutMindMapNestedInput
  }

  export type MindMapUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    Chat?: ChatUncheckedUpdateOneWithoutMindMapNestedInput
    nodes?: NodeUncheckedUpdateManyWithoutMindMapNestedInput
  }

  export type MindMapCreateManyInput = {
    id?: string
    title: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
  }

  export type MindMapUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MindMapUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutChatInput
    mindMap: MindMapCreateNestedOneWithoutChatInput
    Message?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    userId?: string | null
    mindMapId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Message?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutChatNestedInput
    mindMap?: MindMapUpdateOneRequiredWithoutChatNestedInput
    Message?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mindMapId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Message?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
    userId?: string | null
    mindMapId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mindMapId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
    workspace: WorkspaceCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
  }

  export type TeamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamMemberCreateInput = {
    id?: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamMemberInput
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateInput = {
    id?: string
    userId: string
    teamId: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
  }

  export type TeamMemberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamMemberNestedInput
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyInput = {
    id?: string
    userId: string
    teamId: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
  }

  export type TeamMemberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamCreateNestedManyWithoutWorkspaceInput
    mindmaps?: MindMapCreateNestedManyWithoutWorkspaceInput
    flowcharts?: FlowchartCreateNestedManyWithoutWorkspaceInput
    whiteboards?: WhiteboardCreateNestedManyWithoutWorkspaceInput
    User?: UserCreateNestedOneWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    teams?: TeamUncheckedCreateNestedManyWithoutWorkspaceInput
    mindmaps?: MindMapUncheckedCreateNestedManyWithoutWorkspaceInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutWorkspaceInput
    whiteboards?: WhiteboardUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutWorkspaceNestedInput
    mindmaps?: MindMapUpdateManyWithoutWorkspaceNestedInput
    flowcharts?: FlowchartUpdateManyWithoutWorkspaceNestedInput
    whiteboards?: WhiteboardUpdateManyWithoutWorkspaceNestedInput
    User?: UserUpdateOneWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: TeamUncheckedUpdateManyWithoutWorkspaceNestedInput
    mindmaps?: MindMapUncheckedUpdateManyWithoutWorkspaceNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutWorkspaceNestedInput
    whiteboards?: WhiteboardUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlowchartCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutFlowchartsInput
  }

  export type FlowchartUncheckedCreateInput = {
    id?: string
    title: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowchartUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutFlowchartsNestedInput
  }

  export type FlowchartUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowchartCreateManyInput = {
    id?: string
    title: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowchartUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowchartUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardCreateInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutWhiteboardsInput
  }

  export type WhiteboardUncheckedCreateInput = {
    id?: string
    title: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhiteboardUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutWhiteboardsNestedInput
  }

  export type WhiteboardUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardCreateManyInput = {
    id?: string
    title: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhiteboardUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateInput = {
    id?: string
    content: string
    positionX: number
    positionY: number
    direction?: $Enums.Direction
    createdBy?: $Enums.NodeSource
    createdAt?: Date | string
    updatedAt?: Date | string
    mindMap: MindMapCreateNestedOneWithoutNodesInput
    parent?: NodeCreateNestedOneWithoutChildrenInput
    children?: NodeCreateNestedManyWithoutParentInput
  }

  export type NodeUncheckedCreateInput = {
    id?: string
    mindMapId: string
    parentId?: string | null
    content: string
    positionX: number
    positionY: number
    direction?: $Enums.Direction
    createdBy?: $Enums.NodeSource
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: NodeUncheckedCreateNestedManyWithoutParentInput
  }

  export type NodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mindMap?: MindMapUpdateOneRequiredWithoutNodesNestedInput
    parent?: NodeUpdateOneWithoutChildrenNestedInput
    children?: NodeUpdateManyWithoutParentNestedInput
  }

  export type NodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mindMapId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: NodeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type NodeCreateManyInput = {
    id?: string
    mindMapId: string
    parentId?: string | null
    content: string
    positionX: number
    positionY: number
    direction?: $Enums.Direction
    createdBy?: $Enums.NodeSource
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mindMapId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionPlanCreateInput = {
    id: string
    name: string
    price: number
    currency: string
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isDefault?: boolean
    UserSubscription?: UserSubscriptionCreateNestedManyWithoutSubscriptionPlanInput
  }

  export type SubscriptionPlanUncheckedCreateInput = {
    id: string
    name: string
    price: number
    currency: string
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isDefault?: boolean
    UserSubscription?: UserSubscriptionUncheckedCreateNestedManyWithoutSubscriptionPlanInput
  }

  export type SubscriptionPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    UserSubscription?: UserSubscriptionUpdateManyWithoutSubscriptionPlanNestedInput
  }

  export type SubscriptionPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isDefault?: BoolFieldUpdateOperationsInput | boolean
    UserSubscription?: UserSubscriptionUncheckedUpdateManyWithoutSubscriptionPlanNestedInput
  }

  export type SubscriptionPlanCreateManyInput = {
    id: string
    name: string
    price: number
    currency: string
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isDefault?: boolean
  }

  export type SubscriptionPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Chat?: ChatCreateNestedManyWithoutUserInput
    MindMap?: MindMapCreateNestedManyWithoutUserInput
    UserSubscription?: UserSubscriptionCreateNestedOneWithoutUserInput
    TeamMember?: TeamMemberCreateNestedManyWithoutUserInput
    workspace?: WorkspaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    MindMap?: MindMapUncheckedCreateNestedManyWithoutUserInput
    UserSubscription?: UserSubscriptionUncheckedCreateNestedOneWithoutUserInput
    TeamMember?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    workspace?: WorkspaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUpdateManyWithoutUserNestedInput
    MindMap?: MindMapUpdateManyWithoutUserNestedInput
    UserSubscription?: UserSubscriptionUpdateOneWithoutUserNestedInput
    TeamMember?: TeamMemberUpdateManyWithoutUserNestedInput
    workspace?: WorkspaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    MindMap?: MindMapUncheckedUpdateManyWithoutUserNestedInput
    UserSubscription?: UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput
    TeamMember?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    workspace?: WorkspaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateInput = {
    id: string
    startedAt?: Date | string
    expiresAt: Date | string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    SubscriptionPlan: SubscriptionPlanCreateNestedOneWithoutUserSubscriptionInput
    User: UserCreateNestedOneWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateInput = {
    id: string
    userId: string
    planId: string
    startedAt?: Date | string
    expiresAt: Date | string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
  }

  export type UserSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    SubscriptionPlan?: SubscriptionPlanUpdateOneRequiredWithoutUserSubscriptionNestedInput
    User?: UserUpdateOneRequiredWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSubscriptionCreateManyInput = {
    id: string
    userId: string
    planId: string
    startedAt?: Date | string
    expiresAt: Date | string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
  }

  export type UserSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    chatId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type EnumGeneratedByFilter<$PrismaModel = never> = {
    equals?: $Enums.GeneratedBy | EnumGeneratedByFieldRefInput<$PrismaModel>
    in?: $Enums.GeneratedBy[] | ListEnumGeneratedByFieldRefInput<$PrismaModel>
    notIn?: $Enums.GeneratedBy[] | ListEnumGeneratedByFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneratedByFilter<$PrismaModel> | $Enums.GeneratedBy
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

  export type ChatNullableScalarRelationFilter = {
    is?: ChatWhereInput | null
    isNot?: ChatWhereInput | null
  }

  export type WorkspaceScalarRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NodeListRelationFilter = {
    every?: NodeWhereInput
    some?: NodeWhereInput
    none?: NodeWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MindMapCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    generatedBy?: SortOrder
    chatId?: SortOrder
  }

  export type MindMapMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    generatedBy?: SortOrder
    chatId?: SortOrder
  }

  export type MindMapMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    isPublic?: SortOrder
    generatedBy?: SortOrder
    chatId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type EnumGeneratedByWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GeneratedBy | EnumGeneratedByFieldRefInput<$PrismaModel>
    in?: $Enums.GeneratedBy[] | ListEnumGeneratedByFieldRefInput<$PrismaModel>
    notIn?: $Enums.GeneratedBy[] | ListEnumGeneratedByFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneratedByWithAggregatesFilter<$PrismaModel> | $Enums.GeneratedBy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeneratedByFilter<$PrismaModel>
    _max?: NestedEnumGeneratedByFilter<$PrismaModel>
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

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MindMapScalarRelationFilter = {
    is?: MindMapWhereInput
    isNot?: MindMapWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mindMapId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mindMapId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    mindMapId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TeamMemberListRelationFilter = {
    every?: TeamMemberWhereInput
    some?: TeamMemberWhereInput
    none?: TeamMemberWhereInput
  }

  export type TeamMemberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeamCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
  }

  export type TeamMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
  }

  export type TeamMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspaceId?: SortOrder
  }

  export type EnumTeamRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamRoleFilter<$PrismaModel> | $Enums.TeamRole
  }

  export type TeamScalarRelationFilter = {
    is?: TeamWhereInput
    isNot?: TeamWhereInput
  }

  export type TeamMemberUserIdTeamIdCompoundUniqueInput = {
    userId: string
    teamId: string
  }

  export type TeamMemberCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type TeamMemberMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type TeamMemberMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    teamId?: SortOrder
    role?: SortOrder
    joinedAt?: SortOrder
  }

  export type EnumTeamRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamRoleFilter<$PrismaModel>
    _max?: NestedEnumTeamRoleFilter<$PrismaModel>
  }

  export type TeamListRelationFilter = {
    every?: TeamWhereInput
    some?: TeamWhereInput
    none?: TeamWhereInput
  }

  export type MindMapListRelationFilter = {
    every?: MindMapWhereInput
    some?: MindMapWhereInput
    none?: MindMapWhereInput
  }

  export type FlowchartListRelationFilter = {
    every?: FlowchartWhereInput
    some?: FlowchartWhereInput
    none?: FlowchartWhereInput
  }

  export type WhiteboardListRelationFilter = {
    every?: WhiteboardWhereInput
    some?: WhiteboardWhereInput
    none?: WhiteboardWhereInput
  }

  export type TeamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MindMapOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowchartOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WhiteboardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type FlowchartCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowchartMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlowchartMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhiteboardCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhiteboardMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WhiteboardMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    workspaceId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.Direction | EnumDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.Direction[] | ListEnumDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Direction[] | ListEnumDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectionFilter<$PrismaModel> | $Enums.Direction
  }

  export type EnumNodeSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.NodeSource | EnumNodeSourceFieldRefInput<$PrismaModel>
    in?: $Enums.NodeSource[] | ListEnumNodeSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NodeSource[] | ListEnumNodeSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumNodeSourceFilter<$PrismaModel> | $Enums.NodeSource
  }

  export type NodeNullableScalarRelationFilter = {
    is?: NodeWhereInput | null
    isNot?: NodeWhereInput | null
  }

  export type NodeCountOrderByAggregateInput = {
    id?: SortOrder
    mindMapId?: SortOrder
    parentId?: SortOrder
    content?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    direction?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeAvgOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
  }

  export type NodeMaxOrderByAggregateInput = {
    id?: SortOrder
    mindMapId?: SortOrder
    parentId?: SortOrder
    content?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    direction?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeMinOrderByAggregateInput = {
    id?: SortOrder
    mindMapId?: SortOrder
    parentId?: SortOrder
    content?: SortOrder
    positionX?: SortOrder
    positionY?: SortOrder
    direction?: SortOrder
    createdBy?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeSumOrderByAggregateInput = {
    positionX?: SortOrder
    positionY?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Direction | EnumDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.Direction[] | ListEnumDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Direction[] | ListEnumDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectionWithAggregatesFilter<$PrismaModel> | $Enums.Direction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDirectionFilter<$PrismaModel>
    _max?: NestedEnumDirectionFilter<$PrismaModel>
  }

  export type EnumNodeSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NodeSource | EnumNodeSourceFieldRefInput<$PrismaModel>
    in?: $Enums.NodeSource[] | ListEnumNodeSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NodeSource[] | ListEnumNodeSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumNodeSourceWithAggregatesFilter<$PrismaModel> | $Enums.NodeSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNodeSourceFilter<$PrismaModel>
    _max?: NestedEnumNodeSourceFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserSubscriptionListRelationFilter = {
    every?: UserSubscriptionWhereInput
    some?: UserSubscriptionWhereInput
    none?: UserSubscriptionWhereInput
  }

  export type UserSubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionPlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    features?: SortOrder
    isDefault?: SortOrder
  }

  export type SubscriptionPlanAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type SubscriptionPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    isDefault?: SortOrder
  }

  export type SubscriptionPlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    isDefault?: SortOrder
  }

  export type SubscriptionPlanSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type ChatListRelationFilter = {
    every?: ChatWhereInput
    some?: ChatWhereInput
    none?: ChatWhereInput
  }

  export type UserSubscriptionNullableScalarRelationFilter = {
    is?: UserSubscriptionWhereInput | null
    isNot?: UserSubscriptionWhereInput | null
  }

  export type WorkspaceListRelationFilter = {
    every?: WorkspaceWhereInput
    some?: WorkspaceWhereInput
    none?: WorkspaceWhereInput
  }

  export type ChatOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isProfileSetup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isProfileSetup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    isProfileSetup?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionPlanScalarRelationFilter = {
    is?: SubscriptionPlanWhereInput
    isNot?: SubscriptionPlanWhereInput
  }

  export type UserSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
  }

  export type UserSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
  }

  export type UserSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    planId?: SortOrder
    startedAt?: SortOrder
    expiresAt?: SortOrder
    stripeCustomerId?: SortOrder
    stripeSubscriptionId?: SortOrder
  }

  export type ChatCreateNestedOneWithoutMessageInput = {
    create?: XOR<ChatCreateWithoutMessageInput, ChatUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessageInput
    connect?: ChatWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ChatUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<ChatCreateWithoutMessageInput, ChatUncheckedCreateWithoutMessageInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessageInput
    upsert?: ChatUpsertWithoutMessageInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessageInput, ChatUpdateWithoutMessageInput>, ChatUncheckedUpdateWithoutMessageInput>
  }

  export type ChatCreateNestedOneWithoutMindMapInput = {
    create?: XOR<ChatCreateWithoutMindMapInput, ChatUncheckedCreateWithoutMindMapInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMindMapInput
    connect?: ChatWhereUniqueInput
  }

  export type WorkspaceCreateNestedOneWithoutMindmapsInput = {
    create?: XOR<WorkspaceCreateWithoutMindmapsInput, WorkspaceUncheckedCreateWithoutMindmapsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutMindmapsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMindMapInput = {
    create?: XOR<UserCreateWithoutMindMapInput, UserUncheckedCreateWithoutMindMapInput>
    connectOrCreate?: UserCreateOrConnectWithoutMindMapInput
    connect?: UserWhereUniqueInput
  }

  export type NodeCreateNestedManyWithoutMindMapInput = {
    create?: XOR<NodeCreateWithoutMindMapInput, NodeUncheckedCreateWithoutMindMapInput> | NodeCreateWithoutMindMapInput[] | NodeUncheckedCreateWithoutMindMapInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutMindMapInput | NodeCreateOrConnectWithoutMindMapInput[]
    createMany?: NodeCreateManyMindMapInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedOneWithoutMindMapInput = {
    create?: XOR<ChatCreateWithoutMindMapInput, ChatUncheckedCreateWithoutMindMapInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMindMapInput
    connect?: ChatWhereUniqueInput
  }

  export type NodeUncheckedCreateNestedManyWithoutMindMapInput = {
    create?: XOR<NodeCreateWithoutMindMapInput, NodeUncheckedCreateWithoutMindMapInput> | NodeCreateWithoutMindMapInput[] | NodeUncheckedCreateWithoutMindMapInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutMindMapInput | NodeCreateOrConnectWithoutMindMapInput[]
    createMany?: NodeCreateManyMindMapInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type EnumGeneratedByFieldUpdateOperationsInput = {
    set?: $Enums.GeneratedBy
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ChatUpdateOneWithoutMindMapNestedInput = {
    create?: XOR<ChatCreateWithoutMindMapInput, ChatUncheckedCreateWithoutMindMapInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMindMapInput
    upsert?: ChatUpsertWithoutMindMapInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMindMapInput, ChatUpdateWithoutMindMapInput>, ChatUncheckedUpdateWithoutMindMapInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutMindmapsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutMindmapsInput, WorkspaceUncheckedCreateWithoutMindmapsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutMindmapsInput
    upsert?: WorkspaceUpsertWithoutMindmapsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutMindmapsInput, WorkspaceUpdateWithoutMindmapsInput>, WorkspaceUncheckedUpdateWithoutMindmapsInput>
  }

  export type UserUpdateOneRequiredWithoutMindMapNestedInput = {
    create?: XOR<UserCreateWithoutMindMapInput, UserUncheckedCreateWithoutMindMapInput>
    connectOrCreate?: UserCreateOrConnectWithoutMindMapInput
    upsert?: UserUpsertWithoutMindMapInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMindMapInput, UserUpdateWithoutMindMapInput>, UserUncheckedUpdateWithoutMindMapInput>
  }

  export type NodeUpdateManyWithoutMindMapNestedInput = {
    create?: XOR<NodeCreateWithoutMindMapInput, NodeUncheckedCreateWithoutMindMapInput> | NodeCreateWithoutMindMapInput[] | NodeUncheckedCreateWithoutMindMapInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutMindMapInput | NodeCreateOrConnectWithoutMindMapInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutMindMapInput | NodeUpsertWithWhereUniqueWithoutMindMapInput[]
    createMany?: NodeCreateManyMindMapInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutMindMapInput | NodeUpdateWithWhereUniqueWithoutMindMapInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutMindMapInput | NodeUpdateManyWithWhereWithoutMindMapInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type ChatUncheckedUpdateOneWithoutMindMapNestedInput = {
    create?: XOR<ChatCreateWithoutMindMapInput, ChatUncheckedCreateWithoutMindMapInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMindMapInput
    upsert?: ChatUpsertWithoutMindMapInput
    disconnect?: ChatWhereInput | boolean
    delete?: ChatWhereInput | boolean
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMindMapInput, ChatUpdateWithoutMindMapInput>, ChatUncheckedUpdateWithoutMindMapInput>
  }

  export type NodeUncheckedUpdateManyWithoutMindMapNestedInput = {
    create?: XOR<NodeCreateWithoutMindMapInput, NodeUncheckedCreateWithoutMindMapInput> | NodeCreateWithoutMindMapInput[] | NodeUncheckedCreateWithoutMindMapInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutMindMapInput | NodeCreateOrConnectWithoutMindMapInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutMindMapInput | NodeUpsertWithWhereUniqueWithoutMindMapInput[]
    createMany?: NodeCreateManyMindMapInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutMindMapInput | NodeUpdateWithWhereUniqueWithoutMindMapInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutMindMapInput | NodeUpdateManyWithWhereWithoutMindMapInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutChatInput = {
    create?: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInput
    connect?: UserWhereUniqueInput
  }

  export type MindMapCreateNestedOneWithoutChatInput = {
    create?: XOR<MindMapCreateWithoutChatInput, MindMapUncheckedCreateWithoutChatInput>
    connectOrCreate?: MindMapCreateOrConnectWithoutChatInput
    connect?: MindMapWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutChatNestedInput = {
    create?: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatInput
    upsert?: UserUpsertWithoutChatInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatInput, UserUpdateWithoutChatInput>, UserUncheckedUpdateWithoutChatInput>
  }

  export type MindMapUpdateOneRequiredWithoutChatNestedInput = {
    create?: XOR<MindMapCreateWithoutChatInput, MindMapUncheckedCreateWithoutChatInput>
    connectOrCreate?: MindMapCreateOrConnectWithoutChatInput
    upsert?: MindMapUpsertWithoutChatInput
    connect?: MindMapWhereUniqueInput
    update?: XOR<XOR<MindMapUpdateToOneWithWhereWithoutChatInput, MindMapUpdateWithoutChatInput>, MindMapUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type TeamMemberCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type WorkspaceCreateNestedOneWithoutTeamsInput = {
    create?: XOR<WorkspaceCreateWithoutTeamsInput, WorkspaceUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTeamsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutTeamInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type TeamMemberUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutTeamsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutTeamsInput, WorkspaceUncheckedCreateWithoutTeamsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTeamsInput
    upsert?: WorkspaceUpsertWithoutTeamsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutTeamsInput, WorkspaceUpdateWithoutTeamsInput>, WorkspaceUncheckedUpdateWithoutTeamsInput>
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamNestedInput = {
    create?: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput> | TeamMemberCreateWithoutTeamInput[] | TeamMemberUncheckedCreateWithoutTeamInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutTeamInput | TeamMemberCreateOrConnectWithoutTeamInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutTeamInput | TeamMemberUpsertWithWhereUniqueWithoutTeamInput[]
    createMany?: TeamMemberCreateManyTeamInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutTeamInput | TeamMemberUpdateWithWhereUniqueWithoutTeamInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutTeamInput | TeamMemberUpdateManyWithWhereWithoutTeamInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeamMemberInput = {
    create?: XOR<UserCreateWithoutTeamMemberInput, UserUncheckedCreateWithoutTeamMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMemberInput
    connect?: UserWhereUniqueInput
  }

  export type TeamCreateNestedOneWithoutMembersInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    connect?: TeamWhereUniqueInput
  }

  export type EnumTeamRoleFieldUpdateOperationsInput = {
    set?: $Enums.TeamRole
  }

  export type UserUpdateOneRequiredWithoutTeamMemberNestedInput = {
    create?: XOR<UserCreateWithoutTeamMemberInput, UserUncheckedCreateWithoutTeamMemberInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeamMemberInput
    upsert?: UserUpsertWithoutTeamMemberInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeamMemberInput, UserUpdateWithoutTeamMemberInput>, UserUncheckedUpdateWithoutTeamMemberInput>
  }

  export type TeamUpdateOneRequiredWithoutMembersNestedInput = {
    create?: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    connectOrCreate?: TeamCreateOrConnectWithoutMembersInput
    upsert?: TeamUpsertWithoutMembersInput
    connect?: TeamWhereUniqueInput
    update?: XOR<XOR<TeamUpdateToOneWithWhereWithoutMembersInput, TeamUpdateWithoutMembersInput>, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput> | TeamCreateWithoutWorkspaceInput[] | TeamUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutWorkspaceInput | TeamCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TeamCreateManyWorkspaceInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type MindMapCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<MindMapCreateWithoutWorkspaceInput, MindMapUncheckedCreateWithoutWorkspaceInput> | MindMapCreateWithoutWorkspaceInput[] | MindMapUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: MindMapCreateOrConnectWithoutWorkspaceInput | MindMapCreateOrConnectWithoutWorkspaceInput[]
    createMany?: MindMapCreateManyWorkspaceInputEnvelope
    connect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
  }

  export type FlowchartCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<FlowchartCreateWithoutWorkspaceInput, FlowchartUncheckedCreateWithoutWorkspaceInput> | FlowchartCreateWithoutWorkspaceInput[] | FlowchartUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutWorkspaceInput | FlowchartCreateOrConnectWithoutWorkspaceInput[]
    createMany?: FlowchartCreateManyWorkspaceInputEnvelope
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
  }

  export type WhiteboardCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WhiteboardCreateWithoutWorkspaceInput, WhiteboardUncheckedCreateWithoutWorkspaceInput> | WhiteboardCreateWithoutWorkspaceInput[] | WhiteboardUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutWorkspaceInput | WhiteboardCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WhiteboardCreateManyWorkspaceInputEnvelope
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutWorkspaceInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput
    connect?: UserWhereUniqueInput
  }

  export type TeamUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput> | TeamCreateWithoutWorkspaceInput[] | TeamUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutWorkspaceInput | TeamCreateOrConnectWithoutWorkspaceInput[]
    createMany?: TeamCreateManyWorkspaceInputEnvelope
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
  }

  export type MindMapUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<MindMapCreateWithoutWorkspaceInput, MindMapUncheckedCreateWithoutWorkspaceInput> | MindMapCreateWithoutWorkspaceInput[] | MindMapUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: MindMapCreateOrConnectWithoutWorkspaceInput | MindMapCreateOrConnectWithoutWorkspaceInput[]
    createMany?: MindMapCreateManyWorkspaceInputEnvelope
    connect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
  }

  export type FlowchartUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<FlowchartCreateWithoutWorkspaceInput, FlowchartUncheckedCreateWithoutWorkspaceInput> | FlowchartCreateWithoutWorkspaceInput[] | FlowchartUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutWorkspaceInput | FlowchartCreateOrConnectWithoutWorkspaceInput[]
    createMany?: FlowchartCreateManyWorkspaceInputEnvelope
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
  }

  export type WhiteboardUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<WhiteboardCreateWithoutWorkspaceInput, WhiteboardUncheckedCreateWithoutWorkspaceInput> | WhiteboardCreateWithoutWorkspaceInput[] | WhiteboardUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutWorkspaceInput | WhiteboardCreateOrConnectWithoutWorkspaceInput[]
    createMany?: WhiteboardCreateManyWorkspaceInputEnvelope
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
  }

  export type TeamUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput> | TeamCreateWithoutWorkspaceInput[] | TeamUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutWorkspaceInput | TeamCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutWorkspaceInput | TeamUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TeamCreateManyWorkspaceInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutWorkspaceInput | TeamUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutWorkspaceInput | TeamUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type MindMapUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<MindMapCreateWithoutWorkspaceInput, MindMapUncheckedCreateWithoutWorkspaceInput> | MindMapCreateWithoutWorkspaceInput[] | MindMapUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: MindMapCreateOrConnectWithoutWorkspaceInput | MindMapCreateOrConnectWithoutWorkspaceInput[]
    upsert?: MindMapUpsertWithWhereUniqueWithoutWorkspaceInput | MindMapUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: MindMapCreateManyWorkspaceInputEnvelope
    set?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    disconnect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    delete?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    connect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    update?: MindMapUpdateWithWhereUniqueWithoutWorkspaceInput | MindMapUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: MindMapUpdateManyWithWhereWithoutWorkspaceInput | MindMapUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: MindMapScalarWhereInput | MindMapScalarWhereInput[]
  }

  export type FlowchartUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<FlowchartCreateWithoutWorkspaceInput, FlowchartUncheckedCreateWithoutWorkspaceInput> | FlowchartCreateWithoutWorkspaceInput[] | FlowchartUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutWorkspaceInput | FlowchartCreateOrConnectWithoutWorkspaceInput[]
    upsert?: FlowchartUpsertWithWhereUniqueWithoutWorkspaceInput | FlowchartUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: FlowchartCreateManyWorkspaceInputEnvelope
    set?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    disconnect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    delete?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    update?: FlowchartUpdateWithWhereUniqueWithoutWorkspaceInput | FlowchartUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: FlowchartUpdateManyWithWhereWithoutWorkspaceInput | FlowchartUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: FlowchartScalarWhereInput | FlowchartScalarWhereInput[]
  }

  export type WhiteboardUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WhiteboardCreateWithoutWorkspaceInput, WhiteboardUncheckedCreateWithoutWorkspaceInput> | WhiteboardCreateWithoutWorkspaceInput[] | WhiteboardUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutWorkspaceInput | WhiteboardCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WhiteboardUpsertWithWhereUniqueWithoutWorkspaceInput | WhiteboardUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WhiteboardCreateManyWorkspaceInputEnvelope
    set?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    disconnect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    delete?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    update?: WhiteboardUpdateWithWhereUniqueWithoutWorkspaceInput | WhiteboardUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WhiteboardUpdateManyWithWhereWithoutWorkspaceInput | WhiteboardUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
  }

  export type UserUpdateOneWithoutWorkspaceNestedInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput
    upsert?: UserUpsertWithoutWorkspaceInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkspaceInput, UserUpdateWithoutWorkspaceInput>, UserUncheckedUpdateWithoutWorkspaceInput>
  }

  export type TeamUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput> | TeamCreateWithoutWorkspaceInput[] | TeamUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: TeamCreateOrConnectWithoutWorkspaceInput | TeamCreateOrConnectWithoutWorkspaceInput[]
    upsert?: TeamUpsertWithWhereUniqueWithoutWorkspaceInput | TeamUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: TeamCreateManyWorkspaceInputEnvelope
    set?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    disconnect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    delete?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    connect?: TeamWhereUniqueInput | TeamWhereUniqueInput[]
    update?: TeamUpdateWithWhereUniqueWithoutWorkspaceInput | TeamUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: TeamUpdateManyWithWhereWithoutWorkspaceInput | TeamUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: TeamScalarWhereInput | TeamScalarWhereInput[]
  }

  export type MindMapUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<MindMapCreateWithoutWorkspaceInput, MindMapUncheckedCreateWithoutWorkspaceInput> | MindMapCreateWithoutWorkspaceInput[] | MindMapUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: MindMapCreateOrConnectWithoutWorkspaceInput | MindMapCreateOrConnectWithoutWorkspaceInput[]
    upsert?: MindMapUpsertWithWhereUniqueWithoutWorkspaceInput | MindMapUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: MindMapCreateManyWorkspaceInputEnvelope
    set?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    disconnect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    delete?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    connect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    update?: MindMapUpdateWithWhereUniqueWithoutWorkspaceInput | MindMapUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: MindMapUpdateManyWithWhereWithoutWorkspaceInput | MindMapUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: MindMapScalarWhereInput | MindMapScalarWhereInput[]
  }

  export type FlowchartUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<FlowchartCreateWithoutWorkspaceInput, FlowchartUncheckedCreateWithoutWorkspaceInput> | FlowchartCreateWithoutWorkspaceInput[] | FlowchartUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: FlowchartCreateOrConnectWithoutWorkspaceInput | FlowchartCreateOrConnectWithoutWorkspaceInput[]
    upsert?: FlowchartUpsertWithWhereUniqueWithoutWorkspaceInput | FlowchartUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: FlowchartCreateManyWorkspaceInputEnvelope
    set?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    disconnect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    delete?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    connect?: FlowchartWhereUniqueInput | FlowchartWhereUniqueInput[]
    update?: FlowchartUpdateWithWhereUniqueWithoutWorkspaceInput | FlowchartUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: FlowchartUpdateManyWithWhereWithoutWorkspaceInput | FlowchartUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: FlowchartScalarWhereInput | FlowchartScalarWhereInput[]
  }

  export type WhiteboardUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<WhiteboardCreateWithoutWorkspaceInput, WhiteboardUncheckedCreateWithoutWorkspaceInput> | WhiteboardCreateWithoutWorkspaceInput[] | WhiteboardUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: WhiteboardCreateOrConnectWithoutWorkspaceInput | WhiteboardCreateOrConnectWithoutWorkspaceInput[]
    upsert?: WhiteboardUpsertWithWhereUniqueWithoutWorkspaceInput | WhiteboardUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: WhiteboardCreateManyWorkspaceInputEnvelope
    set?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    disconnect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    delete?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    connect?: WhiteboardWhereUniqueInput | WhiteboardWhereUniqueInput[]
    update?: WhiteboardUpdateWithWhereUniqueWithoutWorkspaceInput | WhiteboardUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: WhiteboardUpdateManyWithWhereWithoutWorkspaceInput | WhiteboardUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutFlowchartsInput = {
    create?: XOR<WorkspaceCreateWithoutFlowchartsInput, WorkspaceUncheckedCreateWithoutFlowchartsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutFlowchartsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutFlowchartsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutFlowchartsInput, WorkspaceUncheckedCreateWithoutFlowchartsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutFlowchartsInput
    upsert?: WorkspaceUpsertWithoutFlowchartsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutFlowchartsInput, WorkspaceUpdateWithoutFlowchartsInput>, WorkspaceUncheckedUpdateWithoutFlowchartsInput>
  }

  export type WorkspaceCreateNestedOneWithoutWhiteboardsInput = {
    create?: XOR<WorkspaceCreateWithoutWhiteboardsInput, WorkspaceUncheckedCreateWithoutWhiteboardsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutWhiteboardsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutWhiteboardsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutWhiteboardsInput, WorkspaceUncheckedCreateWithoutWhiteboardsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutWhiteboardsInput
    upsert?: WorkspaceUpsertWithoutWhiteboardsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutWhiteboardsInput, WorkspaceUpdateWithoutWhiteboardsInput>, WorkspaceUncheckedUpdateWithoutWhiteboardsInput>
  }

  export type MindMapCreateNestedOneWithoutNodesInput = {
    create?: XOR<MindMapCreateWithoutNodesInput, MindMapUncheckedCreateWithoutNodesInput>
    connectOrCreate?: MindMapCreateOrConnectWithoutNodesInput
    connect?: MindMapWhereUniqueInput
  }

  export type NodeCreateNestedOneWithoutChildrenInput = {
    create?: XOR<NodeCreateWithoutChildrenInput, NodeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: NodeCreateOrConnectWithoutChildrenInput
    connect?: NodeWhereUniqueInput
  }

  export type NodeCreateNestedManyWithoutParentInput = {
    create?: XOR<NodeCreateWithoutParentInput, NodeUncheckedCreateWithoutParentInput> | NodeCreateWithoutParentInput[] | NodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutParentInput | NodeCreateOrConnectWithoutParentInput[]
    createMany?: NodeCreateManyParentInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type NodeUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<NodeCreateWithoutParentInput, NodeUncheckedCreateWithoutParentInput> | NodeCreateWithoutParentInput[] | NodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutParentInput | NodeCreateOrConnectWithoutParentInput[]
    createMany?: NodeCreateManyParentInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumDirectionFieldUpdateOperationsInput = {
    set?: $Enums.Direction
  }

  export type EnumNodeSourceFieldUpdateOperationsInput = {
    set?: $Enums.NodeSource
  }

  export type MindMapUpdateOneRequiredWithoutNodesNestedInput = {
    create?: XOR<MindMapCreateWithoutNodesInput, MindMapUncheckedCreateWithoutNodesInput>
    connectOrCreate?: MindMapCreateOrConnectWithoutNodesInput
    upsert?: MindMapUpsertWithoutNodesInput
    connect?: MindMapWhereUniqueInput
    update?: XOR<XOR<MindMapUpdateToOneWithWhereWithoutNodesInput, MindMapUpdateWithoutNodesInput>, MindMapUncheckedUpdateWithoutNodesInput>
  }

  export type NodeUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<NodeCreateWithoutChildrenInput, NodeUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: NodeCreateOrConnectWithoutChildrenInput
    upsert?: NodeUpsertWithoutChildrenInput
    disconnect?: NodeWhereInput | boolean
    delete?: NodeWhereInput | boolean
    connect?: NodeWhereUniqueInput
    update?: XOR<XOR<NodeUpdateToOneWithWhereWithoutChildrenInput, NodeUpdateWithoutChildrenInput>, NodeUncheckedUpdateWithoutChildrenInput>
  }

  export type NodeUpdateManyWithoutParentNestedInput = {
    create?: XOR<NodeCreateWithoutParentInput, NodeUncheckedCreateWithoutParentInput> | NodeCreateWithoutParentInput[] | NodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutParentInput | NodeCreateOrConnectWithoutParentInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutParentInput | NodeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: NodeCreateManyParentInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutParentInput | NodeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutParentInput | NodeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type NodeUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<NodeCreateWithoutParentInput, NodeUncheckedCreateWithoutParentInput> | NodeCreateWithoutParentInput[] | NodeUncheckedCreateWithoutParentInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutParentInput | NodeCreateOrConnectWithoutParentInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutParentInput | NodeUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: NodeCreateManyParentInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutParentInput | NodeUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutParentInput | NodeUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type SubscriptionPlanCreatefeaturesInput = {
    set: string[]
  }

  export type UserSubscriptionCreateNestedManyWithoutSubscriptionPlanInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionPlanInput, UserSubscriptionUncheckedCreateWithoutSubscriptionPlanInput> | UserSubscriptionCreateWithoutSubscriptionPlanInput[] | UserSubscriptionUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionPlanInput | UserSubscriptionCreateOrConnectWithoutSubscriptionPlanInput[]
    createMany?: UserSubscriptionCreateManySubscriptionPlanInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedManyWithoutSubscriptionPlanInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionPlanInput, UserSubscriptionUncheckedCreateWithoutSubscriptionPlanInput> | UserSubscriptionCreateWithoutSubscriptionPlanInput[] | UserSubscriptionUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionPlanInput | UserSubscriptionCreateOrConnectWithoutSubscriptionPlanInput[]
    createMany?: UserSubscriptionCreateManySubscriptionPlanInputEnvelope
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
  }

  export type SubscriptionPlanUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserSubscriptionUpdateManyWithoutSubscriptionPlanNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionPlanInput, UserSubscriptionUncheckedCreateWithoutSubscriptionPlanInput> | UserSubscriptionCreateWithoutSubscriptionPlanInput[] | UserSubscriptionUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionPlanInput | UserSubscriptionCreateOrConnectWithoutSubscriptionPlanInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionPlanInput | UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionPlanInput[]
    createMany?: UserSubscriptionCreateManySubscriptionPlanInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionPlanInput | UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionPlanInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutSubscriptionPlanInput | UserSubscriptionUpdateManyWithWhereWithoutSubscriptionPlanInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutSubscriptionPlanNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutSubscriptionPlanInput, UserSubscriptionUncheckedCreateWithoutSubscriptionPlanInput> | UserSubscriptionCreateWithoutSubscriptionPlanInput[] | UserSubscriptionUncheckedCreateWithoutSubscriptionPlanInput[]
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutSubscriptionPlanInput | UserSubscriptionCreateOrConnectWithoutSubscriptionPlanInput[]
    upsert?: UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionPlanInput | UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionPlanInput[]
    createMany?: UserSubscriptionCreateManySubscriptionPlanInputEnvelope
    set?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    disconnect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    delete?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    connect?: UserSubscriptionWhereUniqueInput | UserSubscriptionWhereUniqueInput[]
    update?: UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionPlanInput | UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionPlanInput[]
    updateMany?: UserSubscriptionUpdateManyWithWhereWithoutSubscriptionPlanInput | UserSubscriptionUpdateManyWithWhereWithoutSubscriptionPlanInput[]
    deleteMany?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
  }

  export type ChatCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MindMapCreateNestedManyWithoutUserInput = {
    create?: XOR<MindMapCreateWithoutUserInput, MindMapUncheckedCreateWithoutUserInput> | MindMapCreateWithoutUserInput[] | MindMapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MindMapCreateOrConnectWithoutUserInput | MindMapCreateOrConnectWithoutUserInput[]
    createMany?: MindMapCreateManyUserInputEnvelope
    connect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
  }

  export type UserSubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput
    connect?: UserSubscriptionWhereUniqueInput
  }

  export type TeamMemberCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type WorkspaceCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type ChatUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
  }

  export type MindMapUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MindMapCreateWithoutUserInput, MindMapUncheckedCreateWithoutUserInput> | MindMapCreateWithoutUserInput[] | MindMapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MindMapCreateOrConnectWithoutUserInput | MindMapCreateOrConnectWithoutUserInput[]
    createMany?: MindMapCreateManyUserInputEnvelope
    connect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
  }

  export type UserSubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput
    connect?: UserSubscriptionWhereUniqueInput
  }

  export type TeamMemberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
  }

  export type WorkspaceUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
  }

  export type ChatUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserInput | ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserInput | ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserInput | ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MindMapUpdateManyWithoutUserNestedInput = {
    create?: XOR<MindMapCreateWithoutUserInput, MindMapUncheckedCreateWithoutUserInput> | MindMapCreateWithoutUserInput[] | MindMapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MindMapCreateOrConnectWithoutUserInput | MindMapCreateOrConnectWithoutUserInput[]
    upsert?: MindMapUpsertWithWhereUniqueWithoutUserInput | MindMapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MindMapCreateManyUserInputEnvelope
    set?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    disconnect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    delete?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    connect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    update?: MindMapUpdateWithWhereUniqueWithoutUserInput | MindMapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MindMapUpdateManyWithWhereWithoutUserInput | MindMapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MindMapScalarWhereInput | MindMapScalarWhereInput[]
  }

  export type UserSubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput
    upsert?: UserSubscriptionUpsertWithoutUserInput
    disconnect?: UserSubscriptionWhereInput | boolean
    delete?: UserSubscriptionWhereInput | boolean
    connect?: UserSubscriptionWhereUniqueInput
    update?: XOR<XOR<UserSubscriptionUpdateToOneWithWhereWithoutUserInput, UserSubscriptionUpdateWithoutUserInput>, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type TeamMemberUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type WorkspaceUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutUserInput | WorkspaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutUserInput | WorkspaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutUserInput | WorkspaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type ChatUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput> | ChatCreateWithoutUserInput[] | ChatUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatCreateOrConnectWithoutUserInput | ChatCreateOrConnectWithoutUserInput[]
    upsert?: ChatUpsertWithWhereUniqueWithoutUserInput | ChatUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatCreateManyUserInputEnvelope
    set?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    disconnect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    delete?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    connect?: ChatWhereUniqueInput | ChatWhereUniqueInput[]
    update?: ChatUpdateWithWhereUniqueWithoutUserInput | ChatUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatUpdateManyWithWhereWithoutUserInput | ChatUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatScalarWhereInput | ChatScalarWhereInput[]
  }

  export type MindMapUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MindMapCreateWithoutUserInput, MindMapUncheckedCreateWithoutUserInput> | MindMapCreateWithoutUserInput[] | MindMapUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MindMapCreateOrConnectWithoutUserInput | MindMapCreateOrConnectWithoutUserInput[]
    upsert?: MindMapUpsertWithWhereUniqueWithoutUserInput | MindMapUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MindMapCreateManyUserInputEnvelope
    set?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    disconnect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    delete?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    connect?: MindMapWhereUniqueInput | MindMapWhereUniqueInput[]
    update?: MindMapUpdateWithWhereUniqueWithoutUserInput | MindMapUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MindMapUpdateManyWithWhereWithoutUserInput | MindMapUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MindMapScalarWhereInput | MindMapScalarWhereInput[]
  }

  export type UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: UserSubscriptionCreateOrConnectWithoutUserInput
    upsert?: UserSubscriptionUpsertWithoutUserInput
    disconnect?: UserSubscriptionWhereInput | boolean
    delete?: UserSubscriptionWhereInput | boolean
    connect?: UserSubscriptionWhereUniqueInput
    update?: XOR<XOR<UserSubscriptionUpdateToOneWithWhereWithoutUserInput, UserSubscriptionUpdateWithoutUserInput>, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput> | TeamMemberCreateWithoutUserInput[] | TeamMemberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TeamMemberCreateOrConnectWithoutUserInput | TeamMemberCreateOrConnectWithoutUserInput[]
    upsert?: TeamMemberUpsertWithWhereUniqueWithoutUserInput | TeamMemberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TeamMemberCreateManyUserInputEnvelope
    set?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    disconnect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    delete?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    connect?: TeamMemberWhereUniqueInput | TeamMemberWhereUniqueInput[]
    update?: TeamMemberUpdateWithWhereUniqueWithoutUserInput | TeamMemberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TeamMemberUpdateManyWithWhereWithoutUserInput | TeamMemberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
  }

  export type WorkspaceUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput> | WorkspaceCreateWithoutUserInput[] | WorkspaceUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput | WorkspaceCreateOrConnectWithoutUserInput[]
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutUserInput | WorkspaceUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkspaceCreateManyUserInputEnvelope
    set?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    disconnect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    delete?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    connect?: WorkspaceWhereUniqueInput | WorkspaceWhereUniqueInput[]
    update?: WorkspaceUpdateWithWhereUniqueWithoutUserInput | WorkspaceUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkspaceUpdateManyWithWhereWithoutUserInput | WorkspaceUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
  }

  export type SubscriptionPlanCreateNestedOneWithoutUserSubscriptionInput = {
    create?: XOR<SubscriptionPlanCreateWithoutUserSubscriptionInput, SubscriptionPlanUncheckedCreateWithoutUserSubscriptionInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutUserSubscriptionInput
    connect?: SubscriptionPlanWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUserSubscriptionInput = {
    create?: XOR<UserCreateWithoutUserSubscriptionInput, UserUncheckedCreateWithoutUserSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type SubscriptionPlanUpdateOneRequiredWithoutUserSubscriptionNestedInput = {
    create?: XOR<SubscriptionPlanCreateWithoutUserSubscriptionInput, SubscriptionPlanUncheckedCreateWithoutUserSubscriptionInput>
    connectOrCreate?: SubscriptionPlanCreateOrConnectWithoutUserSubscriptionInput
    upsert?: SubscriptionPlanUpsertWithoutUserSubscriptionInput
    connect?: SubscriptionPlanWhereUniqueInput
    update?: XOR<XOR<SubscriptionPlanUpdateToOneWithWhereWithoutUserSubscriptionInput, SubscriptionPlanUpdateWithoutUserSubscriptionInput>, SubscriptionPlanUncheckedUpdateWithoutUserSubscriptionInput>
  }

  export type UserUpdateOneRequiredWithoutUserSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutUserSubscriptionInput, UserUncheckedCreateWithoutUserSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserSubscriptionInput
    upsert?: UserUpsertWithoutUserSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserSubscriptionInput, UserUpdateWithoutUserSubscriptionInput>, UserUncheckedUpdateWithoutUserSubscriptionInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumGeneratedByFilter<$PrismaModel = never> = {
    equals?: $Enums.GeneratedBy | EnumGeneratedByFieldRefInput<$PrismaModel>
    in?: $Enums.GeneratedBy[] | ListEnumGeneratedByFieldRefInput<$PrismaModel>
    notIn?: $Enums.GeneratedBy[] | ListEnumGeneratedByFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneratedByFilter<$PrismaModel> | $Enums.GeneratedBy
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumGeneratedByWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.GeneratedBy | EnumGeneratedByFieldRefInput<$PrismaModel>
    in?: $Enums.GeneratedBy[] | ListEnumGeneratedByFieldRefInput<$PrismaModel>
    notIn?: $Enums.GeneratedBy[] | ListEnumGeneratedByFieldRefInput<$PrismaModel>
    not?: NestedEnumGeneratedByWithAggregatesFilter<$PrismaModel> | $Enums.GeneratedBy
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumGeneratedByFilter<$PrismaModel>
    _max?: NestedEnumGeneratedByFilter<$PrismaModel>
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

  export type NestedEnumTeamRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamRoleFilter<$PrismaModel> | $Enums.TeamRole
  }

  export type NestedEnumTeamRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TeamRole | EnumTeamRoleFieldRefInput<$PrismaModel>
    in?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.TeamRole[] | ListEnumTeamRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumTeamRoleWithAggregatesFilter<$PrismaModel> | $Enums.TeamRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTeamRoleFilter<$PrismaModel>
    _max?: NestedEnumTeamRoleFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumDirectionFilter<$PrismaModel = never> = {
    equals?: $Enums.Direction | EnumDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.Direction[] | ListEnumDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Direction[] | ListEnumDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectionFilter<$PrismaModel> | $Enums.Direction
  }

  export type NestedEnumNodeSourceFilter<$PrismaModel = never> = {
    equals?: $Enums.NodeSource | EnumNodeSourceFieldRefInput<$PrismaModel>
    in?: $Enums.NodeSource[] | ListEnumNodeSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NodeSource[] | ListEnumNodeSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumNodeSourceFilter<$PrismaModel> | $Enums.NodeSource
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumDirectionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Direction | EnumDirectionFieldRefInput<$PrismaModel>
    in?: $Enums.Direction[] | ListEnumDirectionFieldRefInput<$PrismaModel>
    notIn?: $Enums.Direction[] | ListEnumDirectionFieldRefInput<$PrismaModel>
    not?: NestedEnumDirectionWithAggregatesFilter<$PrismaModel> | $Enums.Direction
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDirectionFilter<$PrismaModel>
    _max?: NestedEnumDirectionFilter<$PrismaModel>
  }

  export type NestedEnumNodeSourceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NodeSource | EnumNodeSourceFieldRefInput<$PrismaModel>
    in?: $Enums.NodeSource[] | ListEnumNodeSourceFieldRefInput<$PrismaModel>
    notIn?: $Enums.NodeSource[] | ListEnumNodeSourceFieldRefInput<$PrismaModel>
    not?: NestedEnumNodeSourceWithAggregatesFilter<$PrismaModel> | $Enums.NodeSource
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNodeSourceFilter<$PrismaModel>
    _max?: NestedEnumNodeSourceFilter<$PrismaModel>
  }

  export type ChatCreateWithoutMessageInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutChatInput
    mindMap: MindMapCreateNestedOneWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessageInput = {
    id?: string
    userId?: string | null
    mindMapId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatCreateOrConnectWithoutMessageInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessageInput, ChatUncheckedCreateWithoutMessageInput>
  }

  export type ChatUpsertWithoutMessageInput = {
    update: XOR<ChatUpdateWithoutMessageInput, ChatUncheckedUpdateWithoutMessageInput>
    create: XOR<ChatCreateWithoutMessageInput, ChatUncheckedCreateWithoutMessageInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessageInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessageInput, ChatUncheckedUpdateWithoutMessageInput>
  }

  export type ChatUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutChatNestedInput
    mindMap?: MindMapUpdateOneRequiredWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mindMapId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatCreateWithoutMindMapInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    User?: UserCreateNestedOneWithoutChatInput
    Message?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMindMapInput = {
    id?: string
    userId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Message?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMindMapInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMindMapInput, ChatUncheckedCreateWithoutMindMapInput>
  }

  export type WorkspaceCreateWithoutMindmapsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamCreateNestedManyWithoutWorkspaceInput
    flowcharts?: FlowchartCreateNestedManyWithoutWorkspaceInput
    whiteboards?: WhiteboardCreateNestedManyWithoutWorkspaceInput
    User?: UserCreateNestedOneWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutMindmapsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    teams?: TeamUncheckedCreateNestedManyWithoutWorkspaceInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutWorkspaceInput
    whiteboards?: WhiteboardUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutMindmapsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutMindmapsInput, WorkspaceUncheckedCreateWithoutMindmapsInput>
  }

  export type UserCreateWithoutMindMapInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Chat?: ChatCreateNestedManyWithoutUserInput
    UserSubscription?: UserSubscriptionCreateNestedOneWithoutUserInput
    TeamMember?: TeamMemberCreateNestedManyWithoutUserInput
    workspace?: WorkspaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMindMapInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    UserSubscription?: UserSubscriptionUncheckedCreateNestedOneWithoutUserInput
    TeamMember?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    workspace?: WorkspaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMindMapInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMindMapInput, UserUncheckedCreateWithoutMindMapInput>
  }

  export type NodeCreateWithoutMindMapInput = {
    id?: string
    content: string
    positionX: number
    positionY: number
    direction?: $Enums.Direction
    createdBy?: $Enums.NodeSource
    createdAt?: Date | string
    updatedAt?: Date | string
    parent?: NodeCreateNestedOneWithoutChildrenInput
    children?: NodeCreateNestedManyWithoutParentInput
  }

  export type NodeUncheckedCreateWithoutMindMapInput = {
    id?: string
    parentId?: string | null
    content: string
    positionX: number
    positionY: number
    direction?: $Enums.Direction
    createdBy?: $Enums.NodeSource
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: NodeUncheckedCreateNestedManyWithoutParentInput
  }

  export type NodeCreateOrConnectWithoutMindMapInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutMindMapInput, NodeUncheckedCreateWithoutMindMapInput>
  }

  export type NodeCreateManyMindMapInputEnvelope = {
    data: NodeCreateManyMindMapInput | NodeCreateManyMindMapInput[]
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithoutMindMapInput = {
    update: XOR<ChatUpdateWithoutMindMapInput, ChatUncheckedUpdateWithoutMindMapInput>
    create: XOR<ChatCreateWithoutMindMapInput, ChatUncheckedCreateWithoutMindMapInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMindMapInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMindMapInput, ChatUncheckedUpdateWithoutMindMapInput>
  }

  export type ChatUpdateWithoutMindMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneWithoutChatNestedInput
    Message?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMindMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Message?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type WorkspaceUpsertWithoutMindmapsInput = {
    update: XOR<WorkspaceUpdateWithoutMindmapsInput, WorkspaceUncheckedUpdateWithoutMindmapsInput>
    create: XOR<WorkspaceCreateWithoutMindmapsInput, WorkspaceUncheckedCreateWithoutMindmapsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutMindmapsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutMindmapsInput, WorkspaceUncheckedUpdateWithoutMindmapsInput>
  }

  export type WorkspaceUpdateWithoutMindmapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutWorkspaceNestedInput
    flowcharts?: FlowchartUpdateManyWithoutWorkspaceNestedInput
    whiteboards?: WhiteboardUpdateManyWithoutWorkspaceNestedInput
    User?: UserUpdateOneWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutMindmapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: TeamUncheckedUpdateManyWithoutWorkspaceNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutWorkspaceNestedInput
    whiteboards?: WhiteboardUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserUpsertWithoutMindMapInput = {
    update: XOR<UserUpdateWithoutMindMapInput, UserUncheckedUpdateWithoutMindMapInput>
    create: XOR<UserCreateWithoutMindMapInput, UserUncheckedCreateWithoutMindMapInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMindMapInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMindMapInput, UserUncheckedUpdateWithoutMindMapInput>
  }

  export type UserUpdateWithoutMindMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUpdateManyWithoutUserNestedInput
    UserSubscription?: UserSubscriptionUpdateOneWithoutUserNestedInput
    TeamMember?: TeamMemberUpdateManyWithoutUserNestedInput
    workspace?: WorkspaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMindMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    UserSubscription?: UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput
    TeamMember?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    workspace?: WorkspaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NodeUpsertWithWhereUniqueWithoutMindMapInput = {
    where: NodeWhereUniqueInput
    update: XOR<NodeUpdateWithoutMindMapInput, NodeUncheckedUpdateWithoutMindMapInput>
    create: XOR<NodeCreateWithoutMindMapInput, NodeUncheckedCreateWithoutMindMapInput>
  }

  export type NodeUpdateWithWhereUniqueWithoutMindMapInput = {
    where: NodeWhereUniqueInput
    data: XOR<NodeUpdateWithoutMindMapInput, NodeUncheckedUpdateWithoutMindMapInput>
  }

  export type NodeUpdateManyWithWhereWithoutMindMapInput = {
    where: NodeScalarWhereInput
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyWithoutMindMapInput>
  }

  export type NodeScalarWhereInput = {
    AND?: NodeScalarWhereInput | NodeScalarWhereInput[]
    OR?: NodeScalarWhereInput[]
    NOT?: NodeScalarWhereInput | NodeScalarWhereInput[]
    id?: StringFilter<"Node"> | string
    mindMapId?: StringFilter<"Node"> | string
    parentId?: StringNullableFilter<"Node"> | string | null
    content?: StringFilter<"Node"> | string
    positionX?: FloatFilter<"Node"> | number
    positionY?: FloatFilter<"Node"> | number
    direction?: EnumDirectionFilter<"Node"> | $Enums.Direction
    createdBy?: EnumNodeSourceFilter<"Node"> | $Enums.NodeSource
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
  }

  export type UserCreateWithoutChatInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    MindMap?: MindMapCreateNestedManyWithoutUserInput
    UserSubscription?: UserSubscriptionCreateNestedOneWithoutUserInput
    TeamMember?: TeamMemberCreateNestedManyWithoutUserInput
    workspace?: WorkspaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    MindMap?: MindMapUncheckedCreateNestedManyWithoutUserInput
    UserSubscription?: UserSubscriptionUncheckedCreateNestedOneWithoutUserInput
    TeamMember?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    workspace?: WorkspaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
  }

  export type MindMapCreateWithoutChatInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
    workspace: WorkspaceCreateNestedOneWithoutMindmapsInput
    User: UserCreateNestedOneWithoutMindMapInput
    nodes?: NodeCreateNestedManyWithoutMindMapInput
  }

  export type MindMapUncheckedCreateWithoutChatInput = {
    id?: string
    title: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
    nodes?: NodeUncheckedCreateNestedManyWithoutMindMapInput
  }

  export type MindMapCreateOrConnectWithoutChatInput = {
    where: MindMapWhereUniqueInput
    create: XOR<MindMapCreateWithoutChatInput, MindMapUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    role: $Enums.Role
    content: string
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    role: $Enums.Role
    content: string
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutChatInput = {
    update: XOR<UserUpdateWithoutChatInput, UserUncheckedUpdateWithoutChatInput>
    create: XOR<UserCreateWithoutChatInput, UserUncheckedCreateWithoutChatInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatInput, UserUncheckedUpdateWithoutChatInput>
  }

  export type UserUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MindMap?: MindMapUpdateManyWithoutUserNestedInput
    UserSubscription?: UserSubscriptionUpdateOneWithoutUserNestedInput
    TeamMember?: TeamMemberUpdateManyWithoutUserNestedInput
    workspace?: WorkspaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    MindMap?: MindMapUncheckedUpdateManyWithoutUserNestedInput
    UserSubscription?: UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput
    TeamMember?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    workspace?: WorkspaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MindMapUpsertWithoutChatInput = {
    update: XOR<MindMapUpdateWithoutChatInput, MindMapUncheckedUpdateWithoutChatInput>
    create: XOR<MindMapCreateWithoutChatInput, MindMapUncheckedCreateWithoutChatInput>
    where?: MindMapWhereInput
  }

  export type MindMapUpdateToOneWithWhereWithoutChatInput = {
    where?: MindMapWhereInput
    data: XOR<MindMapUpdateWithoutChatInput, MindMapUncheckedUpdateWithoutChatInput>
  }

  export type MindMapUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    workspace?: WorkspaceUpdateOneRequiredWithoutMindmapsNestedInput
    User?: UserUpdateOneRequiredWithoutMindMapNestedInput
    nodes?: NodeUpdateManyWithoutMindMapNestedInput
  }

  export type MindMapUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    nodes?: NodeUncheckedUpdateManyWithoutMindMapNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    chatId?: StringFilter<"Message"> | string
    role?: EnumRoleFilter<"Message"> | $Enums.Role
    content?: StringFilter<"Message"> | string
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type TeamMemberCreateWithoutTeamInput = {
    id?: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
    user: UserCreateNestedOneWithoutTeamMemberInput
  }

  export type TeamMemberUncheckedCreateWithoutTeamInput = {
    id?: string
    userId: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
  }

  export type TeamMemberCreateOrConnectWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberCreateManyTeamInputEnvelope = {
    data: TeamMemberCreateManyTeamInput | TeamMemberCreateManyTeamInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceCreateWithoutTeamsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mindmaps?: MindMapCreateNestedManyWithoutWorkspaceInput
    flowcharts?: FlowchartCreateNestedManyWithoutWorkspaceInput
    whiteboards?: WhiteboardCreateNestedManyWithoutWorkspaceInput
    User?: UserCreateNestedOneWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutTeamsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    mindmaps?: MindMapUncheckedCreateNestedManyWithoutWorkspaceInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutWorkspaceInput
    whiteboards?: WhiteboardUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutTeamsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutTeamsInput, WorkspaceUncheckedCreateWithoutTeamsInput>
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
    create: XOR<TeamMemberCreateWithoutTeamInput, TeamMemberUncheckedCreateWithoutTeamInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutTeamInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutTeamInput, TeamMemberUncheckedUpdateWithoutTeamInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutTeamInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutTeamInput>
  }

  export type TeamMemberScalarWhereInput = {
    AND?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    OR?: TeamMemberScalarWhereInput[]
    NOT?: TeamMemberScalarWhereInput | TeamMemberScalarWhereInput[]
    id?: StringFilter<"TeamMember"> | string
    userId?: StringFilter<"TeamMember"> | string
    teamId?: StringFilter<"TeamMember"> | string
    role?: EnumTeamRoleFilter<"TeamMember"> | $Enums.TeamRole
    joinedAt?: DateTimeFilter<"TeamMember"> | Date | string
  }

  export type WorkspaceUpsertWithoutTeamsInput = {
    update: XOR<WorkspaceUpdateWithoutTeamsInput, WorkspaceUncheckedUpdateWithoutTeamsInput>
    create: XOR<WorkspaceCreateWithoutTeamsInput, WorkspaceUncheckedCreateWithoutTeamsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutTeamsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutTeamsInput, WorkspaceUncheckedUpdateWithoutTeamsInput>
  }

  export type WorkspaceUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mindmaps?: MindMapUpdateManyWithoutWorkspaceNestedInput
    flowcharts?: FlowchartUpdateManyWithoutWorkspaceNestedInput
    whiteboards?: WhiteboardUpdateManyWithoutWorkspaceNestedInput
    User?: UserUpdateOneWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutTeamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    mindmaps?: MindMapUncheckedUpdateManyWithoutWorkspaceNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutWorkspaceNestedInput
    whiteboards?: WhiteboardUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type UserCreateWithoutTeamMemberInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Chat?: ChatCreateNestedManyWithoutUserInput
    MindMap?: MindMapCreateNestedManyWithoutUserInput
    UserSubscription?: UserSubscriptionCreateNestedOneWithoutUserInput
    workspace?: WorkspaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTeamMemberInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    MindMap?: MindMapUncheckedCreateNestedManyWithoutUserInput
    UserSubscription?: UserSubscriptionUncheckedCreateNestedOneWithoutUserInput
    workspace?: WorkspaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTeamMemberInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeamMemberInput, UserUncheckedCreateWithoutTeamMemberInput>
  }

  export type TeamCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutTeamsInput
  }

  export type TeamUncheckedCreateWithoutMembersInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspaceId: string
  }

  export type TeamCreateOrConnectWithoutMembersInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
  }

  export type UserUpsertWithoutTeamMemberInput = {
    update: XOR<UserUpdateWithoutTeamMemberInput, UserUncheckedUpdateWithoutTeamMemberInput>
    create: XOR<UserCreateWithoutTeamMemberInput, UserUncheckedCreateWithoutTeamMemberInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeamMemberInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeamMemberInput, UserUncheckedUpdateWithoutTeamMemberInput>
  }

  export type UserUpdateWithoutTeamMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUpdateManyWithoutUserNestedInput
    MindMap?: MindMapUpdateManyWithoutUserNestedInput
    UserSubscription?: UserSubscriptionUpdateOneWithoutUserNestedInput
    workspace?: WorkspaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTeamMemberInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    MindMap?: MindMapUncheckedUpdateManyWithoutUserNestedInput
    UserSubscription?: UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput
    workspace?: WorkspaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TeamUpsertWithoutMembersInput = {
    update: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
    create: XOR<TeamCreateWithoutMembersInput, TeamUncheckedCreateWithoutMembersInput>
    where?: TeamWhereInput
  }

  export type TeamUpdateToOneWithWhereWithoutMembersInput = {
    where?: TeamWhereInput
    data: XOR<TeamUpdateWithoutMembersInput, TeamUncheckedUpdateWithoutMembersInput>
  }

  export type TeamUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutTeamsNestedInput
  }

  export type TeamUncheckedUpdateWithoutMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceId?: StringFieldUpdateOperationsInput | string
  }

  export type TeamCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberCreateNestedManyWithoutTeamInput
  }

  export type TeamUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    members?: TeamMemberUncheckedCreateNestedManyWithoutTeamInput
  }

  export type TeamCreateOrConnectWithoutWorkspaceInput = {
    where: TeamWhereUniqueInput
    create: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput>
  }

  export type TeamCreateManyWorkspaceInputEnvelope = {
    data: TeamCreateManyWorkspaceInput | TeamCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type MindMapCreateWithoutWorkspaceInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
    Chat?: ChatCreateNestedOneWithoutMindMapInput
    User: UserCreateNestedOneWithoutMindMapInput
    nodes?: NodeCreateNestedManyWithoutMindMapInput
  }

  export type MindMapUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
    Chat?: ChatUncheckedCreateNestedOneWithoutMindMapInput
    nodes?: NodeUncheckedCreateNestedManyWithoutMindMapInput
  }

  export type MindMapCreateOrConnectWithoutWorkspaceInput = {
    where: MindMapWhereUniqueInput
    create: XOR<MindMapCreateWithoutWorkspaceInput, MindMapUncheckedCreateWithoutWorkspaceInput>
  }

  export type MindMapCreateManyWorkspaceInputEnvelope = {
    data: MindMapCreateManyWorkspaceInput | MindMapCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type FlowchartCreateWithoutWorkspaceInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowchartUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlowchartCreateOrConnectWithoutWorkspaceInput = {
    where: FlowchartWhereUniqueInput
    create: XOR<FlowchartCreateWithoutWorkspaceInput, FlowchartUncheckedCreateWithoutWorkspaceInput>
  }

  export type FlowchartCreateManyWorkspaceInputEnvelope = {
    data: FlowchartCreateManyWorkspaceInput | FlowchartCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type WhiteboardCreateWithoutWorkspaceInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhiteboardUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhiteboardCreateOrConnectWithoutWorkspaceInput = {
    where: WhiteboardWhereUniqueInput
    create: XOR<WhiteboardCreateWithoutWorkspaceInput, WhiteboardUncheckedCreateWithoutWorkspaceInput>
  }

  export type WhiteboardCreateManyWorkspaceInputEnvelope = {
    data: WhiteboardCreateManyWorkspaceInput | WhiteboardCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutWorkspaceInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Chat?: ChatCreateNestedManyWithoutUserInput
    MindMap?: MindMapCreateNestedManyWithoutUserInput
    UserSubscription?: UserSubscriptionCreateNestedOneWithoutUserInput
    TeamMember?: TeamMemberCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkspaceInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    MindMap?: MindMapUncheckedCreateNestedManyWithoutUserInput
    UserSubscription?: UserSubscriptionUncheckedCreateNestedOneWithoutUserInput
    TeamMember?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkspaceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
  }

  export type TeamUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: TeamWhereUniqueInput
    update: XOR<TeamUpdateWithoutWorkspaceInput, TeamUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<TeamCreateWithoutWorkspaceInput, TeamUncheckedCreateWithoutWorkspaceInput>
  }

  export type TeamUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: TeamWhereUniqueInput
    data: XOR<TeamUpdateWithoutWorkspaceInput, TeamUncheckedUpdateWithoutWorkspaceInput>
  }

  export type TeamUpdateManyWithWhereWithoutWorkspaceInput = {
    where: TeamScalarWhereInput
    data: XOR<TeamUpdateManyMutationInput, TeamUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type TeamScalarWhereInput = {
    AND?: TeamScalarWhereInput | TeamScalarWhereInput[]
    OR?: TeamScalarWhereInput[]
    NOT?: TeamScalarWhereInput | TeamScalarWhereInput[]
    id?: StringFilter<"Team"> | string
    name?: StringFilter<"Team"> | string
    createdAt?: DateTimeFilter<"Team"> | Date | string
    updatedAt?: DateTimeFilter<"Team"> | Date | string
    workspaceId?: StringFilter<"Team"> | string
  }

  export type MindMapUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: MindMapWhereUniqueInput
    update: XOR<MindMapUpdateWithoutWorkspaceInput, MindMapUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<MindMapCreateWithoutWorkspaceInput, MindMapUncheckedCreateWithoutWorkspaceInput>
  }

  export type MindMapUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: MindMapWhereUniqueInput
    data: XOR<MindMapUpdateWithoutWorkspaceInput, MindMapUncheckedUpdateWithoutWorkspaceInput>
  }

  export type MindMapUpdateManyWithWhereWithoutWorkspaceInput = {
    where: MindMapScalarWhereInput
    data: XOR<MindMapUpdateManyMutationInput, MindMapUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type MindMapScalarWhereInput = {
    AND?: MindMapScalarWhereInput | MindMapScalarWhereInput[]
    OR?: MindMapScalarWhereInput[]
    NOT?: MindMapScalarWhereInput | MindMapScalarWhereInput[]
    id?: StringFilter<"MindMap"> | string
    title?: StringFilter<"MindMap"> | string
    workspaceId?: StringFilter<"MindMap"> | string
    createdAt?: DateTimeFilter<"MindMap"> | Date | string
    updatedAt?: DateTimeFilter<"MindMap"> | Date | string
    userId?: StringFilter<"MindMap"> | string
    isPublic?: BoolFilter<"MindMap"> | boolean
    generatedBy?: EnumGeneratedByFilter<"MindMap"> | $Enums.GeneratedBy
    chatId?: StringNullableFilter<"MindMap"> | string | null
  }

  export type FlowchartUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: FlowchartWhereUniqueInput
    update: XOR<FlowchartUpdateWithoutWorkspaceInput, FlowchartUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<FlowchartCreateWithoutWorkspaceInput, FlowchartUncheckedCreateWithoutWorkspaceInput>
  }

  export type FlowchartUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: FlowchartWhereUniqueInput
    data: XOR<FlowchartUpdateWithoutWorkspaceInput, FlowchartUncheckedUpdateWithoutWorkspaceInput>
  }

  export type FlowchartUpdateManyWithWhereWithoutWorkspaceInput = {
    where: FlowchartScalarWhereInput
    data: XOR<FlowchartUpdateManyMutationInput, FlowchartUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type FlowchartScalarWhereInput = {
    AND?: FlowchartScalarWhereInput | FlowchartScalarWhereInput[]
    OR?: FlowchartScalarWhereInput[]
    NOT?: FlowchartScalarWhereInput | FlowchartScalarWhereInput[]
    id?: StringFilter<"Flowchart"> | string
    title?: StringFilter<"Flowchart"> | string
    workspaceId?: StringFilter<"Flowchart"> | string
    createdAt?: DateTimeFilter<"Flowchart"> | Date | string
    updatedAt?: DateTimeFilter<"Flowchart"> | Date | string
  }

  export type WhiteboardUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: WhiteboardWhereUniqueInput
    update: XOR<WhiteboardUpdateWithoutWorkspaceInput, WhiteboardUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WhiteboardCreateWithoutWorkspaceInput, WhiteboardUncheckedCreateWithoutWorkspaceInput>
  }

  export type WhiteboardUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: WhiteboardWhereUniqueInput
    data: XOR<WhiteboardUpdateWithoutWorkspaceInput, WhiteboardUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WhiteboardUpdateManyWithWhereWithoutWorkspaceInput = {
    where: WhiteboardScalarWhereInput
    data: XOR<WhiteboardUpdateManyMutationInput, WhiteboardUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type WhiteboardScalarWhereInput = {
    AND?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
    OR?: WhiteboardScalarWhereInput[]
    NOT?: WhiteboardScalarWhereInput | WhiteboardScalarWhereInput[]
    id?: StringFilter<"Whiteboard"> | string
    title?: StringFilter<"Whiteboard"> | string
    workspaceId?: StringFilter<"Whiteboard"> | string
    createdAt?: DateTimeFilter<"Whiteboard"> | Date | string
    updatedAt?: DateTimeFilter<"Whiteboard"> | Date | string
  }

  export type UserUpsertWithoutWorkspaceInput = {
    update: XOR<UserUpdateWithoutWorkspaceInput, UserUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkspaceInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkspaceInput, UserUncheckedUpdateWithoutWorkspaceInput>
  }

  export type UserUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUpdateManyWithoutUserNestedInput
    MindMap?: MindMapUpdateManyWithoutUserNestedInput
    UserSubscription?: UserSubscriptionUpdateOneWithoutUserNestedInput
    TeamMember?: TeamMemberUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    MindMap?: MindMapUncheckedUpdateManyWithoutUserNestedInput
    UserSubscription?: UserSubscriptionUncheckedUpdateOneWithoutUserNestedInput
    TeamMember?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkspaceCreateWithoutFlowchartsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamCreateNestedManyWithoutWorkspaceInput
    mindmaps?: MindMapCreateNestedManyWithoutWorkspaceInput
    whiteboards?: WhiteboardCreateNestedManyWithoutWorkspaceInput
    User?: UserCreateNestedOneWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutFlowchartsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    teams?: TeamUncheckedCreateNestedManyWithoutWorkspaceInput
    mindmaps?: MindMapUncheckedCreateNestedManyWithoutWorkspaceInput
    whiteboards?: WhiteboardUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutFlowchartsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutFlowchartsInput, WorkspaceUncheckedCreateWithoutFlowchartsInput>
  }

  export type WorkspaceUpsertWithoutFlowchartsInput = {
    update: XOR<WorkspaceUpdateWithoutFlowchartsInput, WorkspaceUncheckedUpdateWithoutFlowchartsInput>
    create: XOR<WorkspaceCreateWithoutFlowchartsInput, WorkspaceUncheckedCreateWithoutFlowchartsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutFlowchartsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutFlowchartsInput, WorkspaceUncheckedUpdateWithoutFlowchartsInput>
  }

  export type WorkspaceUpdateWithoutFlowchartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutWorkspaceNestedInput
    mindmaps?: MindMapUpdateManyWithoutWorkspaceNestedInput
    whiteboards?: WhiteboardUpdateManyWithoutWorkspaceNestedInput
    User?: UserUpdateOneWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutFlowchartsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: TeamUncheckedUpdateManyWithoutWorkspaceNestedInput
    mindmaps?: MindMapUncheckedUpdateManyWithoutWorkspaceNestedInput
    whiteboards?: WhiteboardUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutWhiteboardsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamCreateNestedManyWithoutWorkspaceInput
    mindmaps?: MindMapCreateNestedManyWithoutWorkspaceInput
    flowcharts?: FlowchartCreateNestedManyWithoutWorkspaceInput
    User?: UserCreateNestedOneWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutWhiteboardsInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId?: string | null
    teams?: TeamUncheckedCreateNestedManyWithoutWorkspaceInput
    mindmaps?: MindMapUncheckedCreateNestedManyWithoutWorkspaceInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutWhiteboardsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutWhiteboardsInput, WorkspaceUncheckedCreateWithoutWhiteboardsInput>
  }

  export type WorkspaceUpsertWithoutWhiteboardsInput = {
    update: XOR<WorkspaceUpdateWithoutWhiteboardsInput, WorkspaceUncheckedUpdateWithoutWhiteboardsInput>
    create: XOR<WorkspaceCreateWithoutWhiteboardsInput, WorkspaceUncheckedCreateWithoutWhiteboardsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutWhiteboardsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutWhiteboardsInput, WorkspaceUncheckedUpdateWithoutWhiteboardsInput>
  }

  export type WorkspaceUpdateWithoutWhiteboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutWorkspaceNestedInput
    mindmaps?: MindMapUpdateManyWithoutWorkspaceNestedInput
    flowcharts?: FlowchartUpdateManyWithoutWorkspaceNestedInput
    User?: UserUpdateOneWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutWhiteboardsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    teams?: TeamUncheckedUpdateManyWithoutWorkspaceNestedInput
    mindmaps?: MindMapUncheckedUpdateManyWithoutWorkspaceNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type MindMapCreateWithoutNodesInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
    Chat?: ChatCreateNestedOneWithoutMindMapInput
    workspace: WorkspaceCreateNestedOneWithoutMindmapsInput
    User: UserCreateNestedOneWithoutMindMapInput
  }

  export type MindMapUncheckedCreateWithoutNodesInput = {
    id?: string
    title: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
    Chat?: ChatUncheckedCreateNestedOneWithoutMindMapInput
  }

  export type MindMapCreateOrConnectWithoutNodesInput = {
    where: MindMapWhereUniqueInput
    create: XOR<MindMapCreateWithoutNodesInput, MindMapUncheckedCreateWithoutNodesInput>
  }

  export type NodeCreateWithoutChildrenInput = {
    id?: string
    content: string
    positionX: number
    positionY: number
    direction?: $Enums.Direction
    createdBy?: $Enums.NodeSource
    createdAt?: Date | string
    updatedAt?: Date | string
    mindMap: MindMapCreateNestedOneWithoutNodesInput
    parent?: NodeCreateNestedOneWithoutChildrenInput
  }

  export type NodeUncheckedCreateWithoutChildrenInput = {
    id?: string
    mindMapId: string
    parentId?: string | null
    content: string
    positionX: number
    positionY: number
    direction?: $Enums.Direction
    createdBy?: $Enums.NodeSource
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeCreateOrConnectWithoutChildrenInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutChildrenInput, NodeUncheckedCreateWithoutChildrenInput>
  }

  export type NodeCreateWithoutParentInput = {
    id?: string
    content: string
    positionX: number
    positionY: number
    direction?: $Enums.Direction
    createdBy?: $Enums.NodeSource
    createdAt?: Date | string
    updatedAt?: Date | string
    mindMap: MindMapCreateNestedOneWithoutNodesInput
    children?: NodeCreateNestedManyWithoutParentInput
  }

  export type NodeUncheckedCreateWithoutParentInput = {
    id?: string
    mindMapId: string
    content: string
    positionX: number
    positionY: number
    direction?: $Enums.Direction
    createdBy?: $Enums.NodeSource
    createdAt?: Date | string
    updatedAt?: Date | string
    children?: NodeUncheckedCreateNestedManyWithoutParentInput
  }

  export type NodeCreateOrConnectWithoutParentInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutParentInput, NodeUncheckedCreateWithoutParentInput>
  }

  export type NodeCreateManyParentInputEnvelope = {
    data: NodeCreateManyParentInput | NodeCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type MindMapUpsertWithoutNodesInput = {
    update: XOR<MindMapUpdateWithoutNodesInput, MindMapUncheckedUpdateWithoutNodesInput>
    create: XOR<MindMapCreateWithoutNodesInput, MindMapUncheckedCreateWithoutNodesInput>
    where?: MindMapWhereInput
  }

  export type MindMapUpdateToOneWithWhereWithoutNodesInput = {
    where?: MindMapWhereInput
    data: XOR<MindMapUpdateWithoutNodesInput, MindMapUncheckedUpdateWithoutNodesInput>
  }

  export type MindMapUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    Chat?: ChatUpdateOneWithoutMindMapNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutMindmapsNestedInput
    User?: UserUpdateOneRequiredWithoutMindMapNestedInput
  }

  export type MindMapUncheckedUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    Chat?: ChatUncheckedUpdateOneWithoutMindMapNestedInput
  }

  export type NodeUpsertWithoutChildrenInput = {
    update: XOR<NodeUpdateWithoutChildrenInput, NodeUncheckedUpdateWithoutChildrenInput>
    create: XOR<NodeCreateWithoutChildrenInput, NodeUncheckedCreateWithoutChildrenInput>
    where?: NodeWhereInput
  }

  export type NodeUpdateToOneWithWhereWithoutChildrenInput = {
    where?: NodeWhereInput
    data: XOR<NodeUpdateWithoutChildrenInput, NodeUncheckedUpdateWithoutChildrenInput>
  }

  export type NodeUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mindMap?: MindMapUpdateOneRequiredWithoutNodesNestedInput
    parent?: NodeUpdateOneWithoutChildrenNestedInput
  }

  export type NodeUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    mindMapId?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUpsertWithWhereUniqueWithoutParentInput = {
    where: NodeWhereUniqueInput
    update: XOR<NodeUpdateWithoutParentInput, NodeUncheckedUpdateWithoutParentInput>
    create: XOR<NodeCreateWithoutParentInput, NodeUncheckedCreateWithoutParentInput>
  }

  export type NodeUpdateWithWhereUniqueWithoutParentInput = {
    where: NodeWhereUniqueInput
    data: XOR<NodeUpdateWithoutParentInput, NodeUncheckedUpdateWithoutParentInput>
  }

  export type NodeUpdateManyWithWhereWithoutParentInput = {
    where: NodeScalarWhereInput
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyWithoutParentInput>
  }

  export type UserSubscriptionCreateWithoutSubscriptionPlanInput = {
    id: string
    startedAt?: Date | string
    expiresAt: Date | string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    User: UserCreateNestedOneWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateWithoutSubscriptionPlanInput = {
    id: string
    userId: string
    startedAt?: Date | string
    expiresAt: Date | string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
  }

  export type UserSubscriptionCreateOrConnectWithoutSubscriptionPlanInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutSubscriptionPlanInput, UserSubscriptionUncheckedCreateWithoutSubscriptionPlanInput>
  }

  export type UserSubscriptionCreateManySubscriptionPlanInputEnvelope = {
    data: UserSubscriptionCreateManySubscriptionPlanInput | UserSubscriptionCreateManySubscriptionPlanInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionPlanInput = {
    where: UserSubscriptionWhereUniqueInput
    update: XOR<UserSubscriptionUpdateWithoutSubscriptionPlanInput, UserSubscriptionUncheckedUpdateWithoutSubscriptionPlanInput>
    create: XOR<UserSubscriptionCreateWithoutSubscriptionPlanInput, UserSubscriptionUncheckedCreateWithoutSubscriptionPlanInput>
  }

  export type UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionPlanInput = {
    where: UserSubscriptionWhereUniqueInput
    data: XOR<UserSubscriptionUpdateWithoutSubscriptionPlanInput, UserSubscriptionUncheckedUpdateWithoutSubscriptionPlanInput>
  }

  export type UserSubscriptionUpdateManyWithWhereWithoutSubscriptionPlanInput = {
    where: UserSubscriptionScalarWhereInput
    data: XOR<UserSubscriptionUpdateManyMutationInput, UserSubscriptionUncheckedUpdateManyWithoutSubscriptionPlanInput>
  }

  export type UserSubscriptionScalarWhereInput = {
    AND?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    OR?: UserSubscriptionScalarWhereInput[]
    NOT?: UserSubscriptionScalarWhereInput | UserSubscriptionScalarWhereInput[]
    id?: StringFilter<"UserSubscription"> | string
    userId?: StringFilter<"UserSubscription"> | string
    planId?: StringFilter<"UserSubscription"> | string
    startedAt?: DateTimeFilter<"UserSubscription"> | Date | string
    expiresAt?: DateTimeFilter<"UserSubscription"> | Date | string
    stripeCustomerId?: StringNullableFilter<"UserSubscription"> | string | null
    stripeSubscriptionId?: StringNullableFilter<"UserSubscription"> | string | null
  }

  export type ChatCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    mindMap: MindMapCreateNestedOneWithoutChatInput
    Message?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutUserInput = {
    id?: string
    mindMapId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    Message?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutUserInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type ChatCreateManyUserInputEnvelope = {
    data: ChatCreateManyUserInput | ChatCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MindMapCreateWithoutUserInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
    Chat?: ChatCreateNestedOneWithoutMindMapInput
    workspace: WorkspaceCreateNestedOneWithoutMindmapsInput
    nodes?: NodeCreateNestedManyWithoutMindMapInput
  }

  export type MindMapUncheckedCreateWithoutUserInput = {
    id?: string
    title: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
    Chat?: ChatUncheckedCreateNestedOneWithoutMindMapInput
    nodes?: NodeUncheckedCreateNestedManyWithoutMindMapInput
  }

  export type MindMapCreateOrConnectWithoutUserInput = {
    where: MindMapWhereUniqueInput
    create: XOR<MindMapCreateWithoutUserInput, MindMapUncheckedCreateWithoutUserInput>
  }

  export type MindMapCreateManyUserInputEnvelope = {
    data: MindMapCreateManyUserInput | MindMapCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserSubscriptionCreateWithoutUserInput = {
    id: string
    startedAt?: Date | string
    expiresAt: Date | string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
    SubscriptionPlan: SubscriptionPlanCreateNestedOneWithoutUserSubscriptionInput
  }

  export type UserSubscriptionUncheckedCreateWithoutUserInput = {
    id: string
    planId: string
    startedAt?: Date | string
    expiresAt: Date | string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
  }

  export type UserSubscriptionCreateOrConnectWithoutUserInput = {
    where: UserSubscriptionWhereUniqueInput
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberCreateWithoutUserInput = {
    id?: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
    team: TeamCreateNestedOneWithoutMembersInput
  }

  export type TeamMemberUncheckedCreateWithoutUserInput = {
    id?: string
    teamId: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
  }

  export type TeamMemberCreateOrConnectWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberCreateManyUserInputEnvelope = {
    data: TeamMemberCreateManyUserInput | TeamMemberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkspaceCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamCreateNestedManyWithoutWorkspaceInput
    mindmaps?: MindMapCreateNestedManyWithoutWorkspaceInput
    flowcharts?: FlowchartCreateNestedManyWithoutWorkspaceInput
    whiteboards?: WhiteboardCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teams?: TeamUncheckedCreateNestedManyWithoutWorkspaceInput
    mindmaps?: MindMapUncheckedCreateNestedManyWithoutWorkspaceInput
    flowcharts?: FlowchartUncheckedCreateNestedManyWithoutWorkspaceInput
    whiteboards?: WhiteboardUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutUserInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceCreateManyUserInputEnvelope = {
    data: WorkspaceCreateManyUserInput | WorkspaceCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatWhereUniqueInput
    update: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
    create: XOR<ChatCreateWithoutUserInput, ChatUncheckedCreateWithoutUserInput>
  }

  export type ChatUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatWhereUniqueInput
    data: XOR<ChatUpdateWithoutUserInput, ChatUncheckedUpdateWithoutUserInput>
  }

  export type ChatUpdateManyWithWhereWithoutUserInput = {
    where: ChatScalarWhereInput
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatScalarWhereInput = {
    AND?: ChatScalarWhereInput | ChatScalarWhereInput[]
    OR?: ChatScalarWhereInput[]
    NOT?: ChatScalarWhereInput | ChatScalarWhereInput[]
    id?: StringFilter<"Chat"> | string
    userId?: StringNullableFilter<"Chat"> | string | null
    mindMapId?: StringFilter<"Chat"> | string
    createdAt?: DateTimeFilter<"Chat"> | Date | string
    updatedAt?: DateTimeFilter<"Chat"> | Date | string
  }

  export type MindMapUpsertWithWhereUniqueWithoutUserInput = {
    where: MindMapWhereUniqueInput
    update: XOR<MindMapUpdateWithoutUserInput, MindMapUncheckedUpdateWithoutUserInput>
    create: XOR<MindMapCreateWithoutUserInput, MindMapUncheckedCreateWithoutUserInput>
  }

  export type MindMapUpdateWithWhereUniqueWithoutUserInput = {
    where: MindMapWhereUniqueInput
    data: XOR<MindMapUpdateWithoutUserInput, MindMapUncheckedUpdateWithoutUserInput>
  }

  export type MindMapUpdateManyWithWhereWithoutUserInput = {
    where: MindMapScalarWhereInput
    data: XOR<MindMapUpdateManyMutationInput, MindMapUncheckedUpdateManyWithoutUserInput>
  }

  export type UserSubscriptionUpsertWithoutUserInput = {
    update: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<UserSubscriptionCreateWithoutUserInput, UserSubscriptionUncheckedCreateWithoutUserInput>
    where?: UserSubscriptionWhereInput
  }

  export type UserSubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: UserSubscriptionWhereInput
    data: XOR<UserSubscriptionUpdateWithoutUserInput, UserSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    SubscriptionPlan?: SubscriptionPlanUpdateOneRequiredWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamMemberUpsertWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    update: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
    create: XOR<TeamMemberCreateWithoutUserInput, TeamMemberUncheckedCreateWithoutUserInput>
  }

  export type TeamMemberUpdateWithWhereUniqueWithoutUserInput = {
    where: TeamMemberWhereUniqueInput
    data: XOR<TeamMemberUpdateWithoutUserInput, TeamMemberUncheckedUpdateWithoutUserInput>
  }

  export type TeamMemberUpdateManyWithWhereWithoutUserInput = {
    where: TeamMemberScalarWhereInput
    data: XOR<TeamMemberUpdateManyMutationInput, TeamMemberUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkspaceUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkspaceWhereUniqueInput
    update: XOR<WorkspaceUpdateWithoutUserInput, WorkspaceUncheckedUpdateWithoutUserInput>
    create: XOR<WorkspaceCreateWithoutUserInput, WorkspaceUncheckedCreateWithoutUserInput>
  }

  export type WorkspaceUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkspaceWhereUniqueInput
    data: XOR<WorkspaceUpdateWithoutUserInput, WorkspaceUncheckedUpdateWithoutUserInput>
  }

  export type WorkspaceUpdateManyWithWhereWithoutUserInput = {
    where: WorkspaceScalarWhereInput
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkspaceScalarWhereInput = {
    AND?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    OR?: WorkspaceScalarWhereInput[]
    NOT?: WorkspaceScalarWhereInput | WorkspaceScalarWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    userId?: StringNullableFilter<"Workspace"> | string | null
  }

  export type SubscriptionPlanCreateWithoutUserSubscriptionInput = {
    id: string
    name: string
    price: number
    currency: string
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isDefault?: boolean
  }

  export type SubscriptionPlanUncheckedCreateWithoutUserSubscriptionInput = {
    id: string
    name: string
    price: number
    currency: string
    features?: SubscriptionPlanCreatefeaturesInput | string[]
    isDefault?: boolean
  }

  export type SubscriptionPlanCreateOrConnectWithoutUserSubscriptionInput = {
    where: SubscriptionPlanWhereUniqueInput
    create: XOR<SubscriptionPlanCreateWithoutUserSubscriptionInput, SubscriptionPlanUncheckedCreateWithoutUserSubscriptionInput>
  }

  export type UserCreateWithoutUserSubscriptionInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Chat?: ChatCreateNestedManyWithoutUserInput
    MindMap?: MindMapCreateNestedManyWithoutUserInput
    TeamMember?: TeamMemberCreateNestedManyWithoutUserInput
    workspace?: WorkspaceCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserSubscriptionInput = {
    id: string
    email: string
    name: string
    isProfileSetup?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    Chat?: ChatUncheckedCreateNestedManyWithoutUserInput
    MindMap?: MindMapUncheckedCreateNestedManyWithoutUserInput
    TeamMember?: TeamMemberUncheckedCreateNestedManyWithoutUserInput
    workspace?: WorkspaceUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserSubscriptionInput, UserUncheckedCreateWithoutUserSubscriptionInput>
  }

  export type SubscriptionPlanUpsertWithoutUserSubscriptionInput = {
    update: XOR<SubscriptionPlanUpdateWithoutUserSubscriptionInput, SubscriptionPlanUncheckedUpdateWithoutUserSubscriptionInput>
    create: XOR<SubscriptionPlanCreateWithoutUserSubscriptionInput, SubscriptionPlanUncheckedCreateWithoutUserSubscriptionInput>
    where?: SubscriptionPlanWhereInput
  }

  export type SubscriptionPlanUpdateToOneWithWhereWithoutUserSubscriptionInput = {
    where?: SubscriptionPlanWhereInput
    data: XOR<SubscriptionPlanUpdateWithoutUserSubscriptionInput, SubscriptionPlanUncheckedUpdateWithoutUserSubscriptionInput>
  }

  export type SubscriptionPlanUpdateWithoutUserSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type SubscriptionPlanUncheckedUpdateWithoutUserSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    features?: SubscriptionPlanUpdatefeaturesInput | string[]
    isDefault?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutUserSubscriptionInput = {
    update: XOR<UserUpdateWithoutUserSubscriptionInput, UserUncheckedUpdateWithoutUserSubscriptionInput>
    create: XOR<UserCreateWithoutUserSubscriptionInput, UserUncheckedCreateWithoutUserSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserSubscriptionInput, UserUncheckedUpdateWithoutUserSubscriptionInput>
  }

  export type UserUpdateWithoutUserSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUpdateManyWithoutUserNestedInput
    MindMap?: MindMapUpdateManyWithoutUserNestedInput
    TeamMember?: TeamMemberUpdateManyWithoutUserNestedInput
    workspace?: WorkspaceUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    isProfileSetup?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Chat?: ChatUncheckedUpdateManyWithoutUserNestedInput
    MindMap?: MindMapUncheckedUpdateManyWithoutUserNestedInput
    TeamMember?: TeamMemberUncheckedUpdateManyWithoutUserNestedInput
    workspace?: WorkspaceUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NodeCreateManyMindMapInput = {
    id?: string
    parentId?: string | null
    content: string
    positionX: number
    positionY: number
    direction?: $Enums.Direction
    createdBy?: $Enums.NodeSource
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeUpdateWithoutMindMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: NodeUpdateOneWithoutChildrenNestedInput
    children?: NodeUpdateManyWithoutParentNestedInput
  }

  export type NodeUncheckedUpdateWithoutMindMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: NodeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type NodeUncheckedUpdateManyWithoutMindMapInput = {
    id?: StringFieldUpdateOperationsInput | string
    parentId?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    role: $Enums.Role
    content: string
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberCreateManyTeamInput = {
    id?: string
    userId: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
  }

  export type TeamMemberUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTeamMemberNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutTeamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamCreateManyWorkspaceInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MindMapCreateManyWorkspaceInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
  }

  export type FlowchartCreateManyWorkspaceInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WhiteboardCreateManyWorkspaceInput = {
    id?: string
    title: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TeamUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    members?: TeamMemberUncheckedUpdateManyWithoutTeamNestedInput
  }

  export type TeamUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MindMapUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    Chat?: ChatUpdateOneWithoutMindMapNestedInput
    User?: UserUpdateOneRequiredWithoutMindMapNestedInput
    nodes?: NodeUpdateManyWithoutMindMapNestedInput
  }

  export type MindMapUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    Chat?: ChatUncheckedUpdateOneWithoutMindMapNestedInput
    nodes?: NodeUncheckedUpdateManyWithoutMindMapNestedInput
  }

  export type MindMapUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type FlowchartUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowchartUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowchartUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WhiteboardUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateManyParentInput = {
    id?: string
    mindMapId: string
    content: string
    positionX: number
    positionY: number
    direction?: $Enums.Direction
    createdBy?: $Enums.NodeSource
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mindMap?: MindMapUpdateOneRequiredWithoutNodesNestedInput
    children?: NodeUpdateManyWithoutParentNestedInput
  }

  export type NodeUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    mindMapId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: NodeUncheckedUpdateManyWithoutParentNestedInput
  }

  export type NodeUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    mindMapId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    positionX?: FloatFieldUpdateOperationsInput | number
    positionY?: FloatFieldUpdateOperationsInput | number
    direction?: EnumDirectionFieldUpdateOperationsInput | $Enums.Direction
    createdBy?: EnumNodeSourceFieldUpdateOperationsInput | $Enums.NodeSource
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserSubscriptionCreateManySubscriptionPlanInput = {
    id: string
    userId: string
    startedAt?: Date | string
    expiresAt: Date | string
    stripeCustomerId?: string | null
    stripeSubscriptionId?: string | null
  }

  export type UserSubscriptionUpdateWithoutSubscriptionPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutUserSubscriptionNestedInput
  }

  export type UserSubscriptionUncheckedUpdateWithoutSubscriptionPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserSubscriptionUncheckedUpdateManyWithoutSubscriptionPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ChatCreateManyUserInput = {
    id?: string
    mindMapId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MindMapCreateManyUserInput = {
    id?: string
    title: string
    workspaceId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    isPublic?: boolean
    generatedBy: $Enums.GeneratedBy
    chatId?: string | null
  }

  export type TeamMemberCreateManyUserInput = {
    id?: string
    teamId: string
    role?: $Enums.TeamRole
    joinedAt?: Date | string
  }

  export type WorkspaceCreateManyUserInput = {
    id?: string
    name: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChatUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mindMap?: MindMapUpdateOneRequiredWithoutChatNestedInput
    Message?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mindMapId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Message?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    mindMapId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MindMapUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    Chat?: ChatUpdateOneWithoutMindMapNestedInput
    workspace?: WorkspaceUpdateOneRequiredWithoutMindmapsNestedInput
    nodes?: NodeUpdateManyWithoutMindMapNestedInput
  }

  export type MindMapUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
    Chat?: ChatUncheckedUpdateOneWithoutMindMapNestedInput
    nodes?: NodeUncheckedUpdateManyWithoutMindMapNestedInput
  }

  export type MindMapUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isPublic?: BoolFieldUpdateOperationsInput | boolean
    generatedBy?: EnumGeneratedByFieldUpdateOperationsInput | $Enums.GeneratedBy
    chatId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeamMemberUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    team?: TeamUpdateOneRequiredWithoutMembersNestedInput
  }

  export type TeamMemberUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeamMemberUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    teamId?: StringFieldUpdateOperationsInput | string
    role?: EnumTeamRoleFieldUpdateOperationsInput | $Enums.TeamRole
    joinedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUpdateManyWithoutWorkspaceNestedInput
    mindmaps?: MindMapUpdateManyWithoutWorkspaceNestedInput
    flowcharts?: FlowchartUpdateManyWithoutWorkspaceNestedInput
    whiteboards?: WhiteboardUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teams?: TeamUncheckedUpdateManyWithoutWorkspaceNestedInput
    mindmaps?: MindMapUncheckedUpdateManyWithoutWorkspaceNestedInput
    flowcharts?: FlowchartUncheckedUpdateManyWithoutWorkspaceNestedInput
    whiteboards?: WhiteboardUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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