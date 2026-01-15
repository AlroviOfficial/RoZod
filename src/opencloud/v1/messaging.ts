import { z } from 'zod';
import { endpoint } from '../..';

const PublishRequest = z.object({ message: z.string().nullable() });

/**
 * @api POST https://apis.roblox.com/cloud/v1/universes/:universeId/topics/:topic
 * @param body
 * @param universeId The identifier of the experience in which you want to send your messages to. You can [copy your experience's Universe ID](/cloud/guides/usage-messaging.md#publishing-messages-to-live-servers) on **Creator Dashboard**.
 * @param topic The topic that you want to publish your message to, with up to 80 characters.
 * @description Publish a message to a pre-defined topic of an experience, with the size of the message up to 1,024 characters (1 KB). Requires the **Publish** permission for API keys and the **universe-messaging-service:publish** scope for OAuth 2.0 apps. See [Cross-server messaging](/cloud-services/cross-server-messaging.md#subscribe-users-to-receive-messages) for defining and subscribing users to a topic.
 */
export const postUniversesUniverseIdTopicsTopic = endpoint({
  method: 'POST',
  path: '/v1/universes/:universeId/topics/:topic',
  baseUrl: 'https://apis.roblox.com/cloud',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    universeId: {},
    topic: {},
  },
  parameters: {
    universeId: z.number().int(),
    topic: z.string().nullable(),
  },
  body: z.object({ message: z.string().nullable() }),
  response: z.void(),
  errors: [
    {
      status: 400,
      description: `Invalid request.`,
    },
    {
      status: 401,
      description: `The API key is not valid for this operation / You don&#x27;t have the authorization.`,
    },
    {
      status: 403,
      description: `Publishing is not allowed on this experience.`,
    },
    {
      status: 500,
      description: `Server internal error / Unknown error.`,
    },
  ],
});
