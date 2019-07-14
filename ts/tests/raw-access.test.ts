/*
 *	Created by Trevor Sears <trevorsears.main@gmail.com>.
 *	4:49 PM -- July 12th, 2019.
 *	Project: @subscribeto/ts-api
 */

import { S2UserSignUpEndpoint, S2APIResponse } from "@subscribeto/ts-api";
import "../main";

/**
 * Tests for the various user endpoint accessor methods.
 *
 * @author Trevor Sears <trevorsears.main@gmail.com>
 * @version v0.1.0
 * @since v0.1.0
 */

describe("/user - User related methods.", () => {
	
	describe("/auth - User authentication methods.", () => {
		
		describe("/sign-up - User sign-up methods.", () => {
			
			test("/ - Sign-up a new user.", async (): Promise<void> => {
				
				let response: S2APIResponse<any> =
					await S2UserSignUpEndpoint.signUp("trevorsears.main@gmail.com", "password");
				
				expect(response).toBeDefined();
				
				console.log(response);
				
			});
			
			test("/finalize - Finalize user sign-up process.", async (): Promise<void> => {
				
				fail("Test has not yet been written.");
				
			});
			
		});
		
		describe("/sign-in - User sign-up methods.", () => {
			
			test("/ - Sign-in to a given user account.", async (): Promise<void> => {
				
				fail("Test has not yet been written.");
				
			});
			
			test("/totp - Verify user sign-in via TOTP.", async (): Promise<void> => {
				
				fail("Test has not yet been written.");
				
			});
			
			test("/sms - Verify user sign-in via SMS.", async (): Promise<void> => {
				
				fail("Test has not yet been written.");
				
			});
			
		});
		
	});
	
	describe("/me - 'Self' user accessor methods.", () => {
	
	
	
	});
	
});