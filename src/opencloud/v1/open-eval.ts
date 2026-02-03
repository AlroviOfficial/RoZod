import { z } from 'zod';
import { endpoint } from '../..';

const CustomLlmInfo = z.object({
  name: z.string().min(1),
  model_version: z.string().nullish(),
  url: z.string().min(1),
  api_key: z.string().nullish(),
});
const EvalRequest = z.object({
  name: z.string().min(1),
  description: z.string().nullish(),
  use_reference_mode: z.boolean().optional(),
  input_script: z.string().min(10),
  custom_llm_info: CustomLlmInfo.optional(),
});
const EvalResponse = z.object({
  job_id: z.string().nullable(),
  status_code: z.number().int(),
  error: z.string().nullable(),
});
const User = z.object({ id: z.string().nullable() });
const InterruptionRecord = z.object({
  check: z.number().int(),
  type: z.string().nullable(),
});
const EvalJsonRecord = z.object({
  passes: z.number().int(),
  fails: z.number().int(),
  checks: z.number().int(),
  warning: z.string().nullable(),
  error: z.string().nullable(),
  interruptions: z.array(InterruptionRecord).nullable(),
});
const EvalResultRecord = z.object({
  mode: z.string().nullable(),
  result: EvalJsonRecord,
});
const EvalRecord = z.object({
  id: z.number().int().optional(),
  name: z.string().nullable(),
  user: User.optional(),
  useReferenceMode: z.string().nullish(),
  description: z.string().nullish(),
  jobId: z.string().uuid(),
  inputScript: z.string().nullable(),
  jobStatus: z.string().nullish(),
  results: z.array(EvalResultRecord).nullish(),
  fullLogs: z.string().nullish(),
  evalSucceeded: z.string().nullish(),
  createUtc: z.string().nullish(),
});

/**
 * @api POST https://apis.roblox.com/cloud/open-eval-api/v1/eval
 * @param body
 */
export const postOpenEvalApiV1Eval = endpoint({
  method: 'POST',
  path: '/open-eval-api/v1/eval',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
  },
  parameters: {},
  body: EvalRequest,
  response: EvalResponse,
  errors: [],
});
/**
 * @api GET https://apis.roblox.com/cloud/open-eval-api/v1/eval-records/:jobId
 * @param jobId
 */
export const getOpenEvalApiV1EvalRecordsJobId = endpoint({
  method: 'GET',
  path: '/open-eval-api/v1/eval-records/:jobId',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    jobId: {},
  },
  parameters: {
    jobId: z.string(),
  },
  response: EvalRecord,
  errors: [],
});
