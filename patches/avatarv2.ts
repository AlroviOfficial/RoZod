// Patched endpoints removed from Roblox API docs (v6.1.0 compat)

export const postOutfitsUseroutfitidUpdate = endpoint({
  method: 'POST',
  path: '/v2/outfits/:userOutfitId/update',
  baseUrl: 'https://avatar.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    body: {},
    userOutfitId: { style: 'simple' },
  },
  parameters: { userOutfitId: z.number().int() },
  body: Roblox_Api_Avatar_Models_OutfitUpdateModelV2,
  response: z.object({}),
  errors: [
    { status: 400, description: `1: The specified userOutfit does not exist!\n3: Body colors must be valid BrickColor IDs\n4: Invalid outfit name\n5: Asset is not wearable by you\n7: Invalid assetIds\n8: Invalid Player Avatar Type. Valid types are R6 and R15` },
    { status: 401, description: `0: Authorization has been denied for this request.` },
    { status: 403, description: `0: Token Validation Failed\n2: You don't have permission to update this outfit.` },
    { status: 500, description: `6: An error occurred while trying to update the outfit` },
  ],
});
