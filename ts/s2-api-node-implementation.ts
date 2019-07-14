/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	1:33 PM -- July 13th, 2019.
 *	Project: @subscribeto/ts-api-node
 */

import { S2API, S2APIResponse } from "@subscribeto/ts-api";
import request from "request";

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

/**
 * A network request implementation for NodeJS.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */
export class S2APINodeImplementation extends S2API {
	
	public static use(): void {
		
		S2API.setNetworkImplementation(
			async <R>(requestMethod: HTTPMethod, endpoint: string, body?: any, token?: string): Promise<S2APIResponse<R>> => {
				
				return new Promise<S2APIResponse<R>>((resolve: (response: S2APIResponse<R>) => any, reject: () => any): void => {
				
					let opts: any = {
					
						url: endpoint,
						method: requestMethod
					
					};
					
					if (body !== undefined) {
						
						opts.json = true;
						opts.body = body;
						
					}
					
					if (token !== undefined) opts.headers = { "Authorization": "Bearer " + token };
					
					request(opts, (error: any, response: any, body: any) => {
					
						resolve(new S2APIResponse(body, response.statusCode));
					
					});
				
				});
				
			}
		);
		
	}
	
}