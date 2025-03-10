import { z } from 'zod';
import { endpoint } from '..';

const Roblox_GameInternationalization_Api_Language = z.object({
  name: z.string(),
  nativeName: z.string(),
  languageCode: z.string(),
});
const Roblox_Localization_Client_LanguageFamily = z.object({
  id: z.number().int(),
  name: z.string(),
  nativeName: z.string(),
  languageCode: z.string(),
  isRightToLeft: z.boolean(),
});
const Roblox_Localization_Client_SupportedLocale = z.object({
  id: z.number().int(),
  locale: z.enum([
    'en_us',
    'es_es',
    'fr_fr',
    'id_id',
    'it_it',
    'ja_jp',
    'ko_kr',
    'ru_ru',
    'th_th',
    'tr_tr',
    'vi_vn',
    'pt_br',
    'de_de',
    'zh_cn',
    'zh_tw',
    'bg_bg',
    'bn_bd',
    'cs_cz',
    'da_dk',
    'el_gr',
    'et_ee',
    'fi_fi',
    'hi_in',
    'hr_hr',
    'hu_hu',
    'ka_ge',
    'kk_kz',
    'km_kh',
    'lt_lt',
    'lv_lv',
    'ms_my',
    'my_mm',
    'nb_no',
    'nl_nl',
    'fil_ph',
    'pl_pl',
    'ro_ro',
    'uk_ua',
    'si_lk',
    'sk_sk',
    'sl_sl',
    'sq_al',
    'bs_ba',
    'sr_rs',
    'sv_se',
    'zh_cjv',
    'ar_001',
  ]),
  localeCode: z.string(),
  name: z.string(),
  nativeName: z.string(),
  language: Roblox_Localization_Client_LanguageFamily,
});
const Roblox_GameInternationalization_Api_LanguageWithLocales = z.object({
  languageFamily: Roblox_GameInternationalization_Api_Language,
  childLocales: z.array(Roblox_Localization_Client_SupportedLocale),
});
const Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_LanguageWithLocales_ = z.object({
  data: z.array(Roblox_GameInternationalization_Api_LanguageWithLocales),
});

/**
 * @api GET https://gameinternationalization.roblox.com/v2/supported-languages/games/:gameId
 * @summary Get the supported languages for a game.
 * @param gameId The id of the game.
 */
export const getSupportedLanguagesGamesGameid = endpoint({
  method: 'GET',
  path: '/v2/supported-languages/games/:gameId',
  baseUrl: 'https://gameinternationalization.roblox.com',
  requestFormat: 'json',
  serializationMethod: {
    gameId: {
      style: 'simple',
    },
  },
  parameters: {
    gameId: z.number().int(),
  },
  response: Roblox_Web_WebAPI_Models_ApiArrayResponse_Roblox_GameInternationalization_Api_LanguageWithLocales_,
  errors: [
    {
      status: 400,
      description: `14: Invalid game id`,
    },
    {
      status: 503,
      description: `17: Feature is disabled`,
    },
  ],
});
