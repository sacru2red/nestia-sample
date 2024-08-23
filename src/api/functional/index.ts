/**
 * @packageDocumentation
 * @module api.functional
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
//================================================================
import type { IConnection } from "@nestia/fetcher";
import { PlainFetcher } from "@nestia/fetcher/lib/PlainFetcher";

/**
 * @controller AppController.getHello
 * @path GET /
 * @nestia Generated by Nestia - https://github.com/samchon/nestia
 */
export async function getHello(
  connection: IConnection,
): Promise<getHello.Output> {
  return PlainFetcher.fetch(connection, {
    ...getHello.METADATA,
    template: getHello.METADATA.path,
    path: getHello.path(),
  });
}
export namespace getHello {
  export type Output = string;

  export const METADATA = {
    method: "GET",
    path: "/",
    request: null,
    response: {
      type: "application/json",
      encrypted: false,
    },
    status: 200,
  } as const;

  export const path = () => "/";
}