/**
 * @author WMXPY
 * @namespace V1
 * @description Authentication Module
 */

import { getCloudFlareDNS, GetCloudFlareDNSResponse } from "../proxy/cloudflare";

export const getAuthenticationModuleV1WithDNSProxy = async (
    domain: string,
): Promise<string> => {

    const authenticationModuleDomain: string =
        `_bark-module-authentication-v1.${domain}`;

    const dnsResponse: GetCloudFlareDNSResponse =
        await getCloudFlareDNS(authenticationModuleDomain, 'CNAME');

    const answer: string = dnsResponse.answer;

    if (answer.endsWith('.')) {
        return answer.slice(0, -1);
    }
    return answer;
};
