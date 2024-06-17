/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


export interface paths {
  "/api/auth/login": {
    post: operations["AuthController_login"];
  };
  "/api/auth/logout": {
    post: operations["AuthController_logout"];
  };
  "/api/auth/register": {
    /**
     * Register a new user
     * @description Request a captcha through the /auth/captcha endpoint,
     *     and pass its token and solution alongside the new user's credentials.
     */
    post: operations["RegisterController_registerUser"];
  };
  "/api/auth/captcha": {
    /** Get a captcha */
    get: operations["CaptchaController_getCaptcha"];
  };
  "/api/user/profile": {
    get: operations["UserController_getProfile"];
  };
  "/api/user/profile/details": {
    get: operations["UserController_getProfileDetails"];
  };
  "/api/user/sessions": {
    get: operations["UserController_getSessions"];
  };
  "/api/user/sessions/current": {
    get: operations["UserController_getCurrentSession"];
  };
  "/api/user/sessions/{id}": {
    put: operations["UserController_updateSession"];
    delete: operations["UserController_deleteSession"];
  };
  "/api/user/export": {
    get: operations["UserController_getExport"];
  };
  "/api/user/profile/image/{username}": {
    get: operations["UserController_getProfileImage"];
  };
  "/api/user/profile/image": {
    post: operations["UserController_uploadProfileImage"];
    delete: operations["UserController_deleteProfileImage"];
  };
  "/api/user": {
    delete: operations["UserController_deleteUser"];
  };
  "/api/user/profile/password": {
    post: operations["UserController_changePassword"];
  };
  "/api/user/subscriptions/channels": {
    get: operations["SubscriptionsController_getSubscribedChannels"];
  };
  "/api/user/subscriptions/videos": {
    get: operations["SubscriptionsController_getSubscriptionVideos"];
  };
  "/api/user/subscriptions/{channelId}": {
    get: operations["SubscriptionsController_getSubscription"];
    put: operations["SubscriptionsController_createSubscription"];
    delete: operations["SubscriptionsController_deleteSubscription"];
  };
  "/api/user/subscriptions/multiple": {
    post: operations["SubscriptionsController_createMultipleSubscriptions"];
  };
  "/api/user/notifications/subscribe": {
    post: operations["NotificationsController_subscribeToNotifications"];
  };
  "/api/user/settings": {
    get: operations["SettingsController_getSettings"];
    put: operations["SettingsController_setSettings"];
  };
  "/api/user/history": {
    get: operations["HistoryController_getHistory"];
    delete: operations["HistoryController_deleteEntireHistory"];
  };
  "/api/user/history/{id}": {
    get: operations["HistoryController_getVideoVisit"];
    post: operations["HistoryController_setVideoVisit"];
  };
  "/api/user/history/{videoId}": {
    delete: operations["HistoryController_deleteHistoryEntry"];
  };
  "/api/user/history/from/{startDate}/to/{endDate}": {
    delete: operations["HistoryController_deleteHistoryRange"];
  };
  "/api/videos/{id}": {
    get: operations["VideosController_getVideos"];
  };
  "/api/videos/{id}/dash": {
    get: operations["VideosController_getDash"];
  };
  "/api/videos/{id}/dislikes": {
    get: operations["VideosController_getDislikes"];
  };
  "/api/videos/{id}/skipSegments": {
    get: operations["VideosController_getSkipSegments"];
  };
  "/api/videoplayback": {
    get: operations["VideoplaybackController_getVideoplayback"];
  };
  "/api/autocomplete": {
    get: operations["AutocompleteController_getQuery"];
  };
  "/api/search": {
    get: operations["SearchController_search"];
  };
  "/api/channels/{id}/thumbnail/tiny.jpg": {
    get: operations["ChannelsController_getTinyThumbnailJpg"];
  };
  "/api/channels/{id}/thumbnail/tiny.webp": {
    get: operations["ChannelsController_getTinyThumbnailWebp"];
  };
  "/api/channels/{id}": {
    get: operations["ChannelsController_getChannelInfo"];
  };
  "/api/channels/{id}/home": {
    get: operations["ChannelsController_getChannelHome"];
  };
  "/api/channels/{id}/videos": {
    get: operations["ChannelsController_getChannelVideos"];
  };
  "/api/channels/videos/continuation": {
    get: operations["ChannelsController_getChannelVideosContinuation"];
  };
  "/api/channels/{id}/shorts": {
    get: operations["ChannelsController_getChannelShorts"];
  };
  "/api/channels/{id}/livestreams": {
    get: operations["ChannelsController_getChannelLivestreams"];
  };
  "/api/channels/{id}/playlists": {
    get: operations["ChannelsController_getChannelPlaylists"];
  };
  "/api/channels/playlists/continuation": {
    get: operations["ChannelsController_getChannelPlaylistsContinuation"];
  };
  "/api/channels/{id}/search": {
    get: operations["ChannelsController_searchChannel"];
  };
  "/api/channels/search/continuation": {
    get: operations["ChannelsController_searchChannelContinuation"];
  };
  "/api/channels/relatedchannels/continuation": {
    get: operations["ChannelsController_getRelatedChannelsContinuation"];
  };
  "/api/channels/{id}/communityposts": {
    get: operations["ChannelsController_getChannelCommunityPosts"];
  };
  "/api/channels/communityposts/continuation": {
    get: operations["ChannelsController_getChannelCommunityPostsContinuation"];
  };
  "/api/channels/{id}/stats": {
    get: operations["ChannelsController_getChannelStats"];
  };
  "/api/homepage/homefeed": {
    get: operations["HomepageController_getHomeFeed"];
  };
  "/api/proxy/image": {
    get: operations["ProxyController_getQuery"];
  };
  "/api/proxy/text": {
    get: operations["ProxyController_proxyText"];
  };
  "/api/proxy/stream": {
    get: operations["ProxyController_proxyStream"];
  };
  "/api/comments/{videoId}": {
    get: operations["CommentsController_getComments"];
  };
  "/api/comments/replies": {
    get: operations["CommentsController_getCommentReplies"];
  };
  "/api/playlists/{playlistId}": {
    get: operations["PlaylistsController_getPlaylist"];
  };
  "/api/playlists/continuation": {
    get: operations["PlaylistsController_getPlaylistContinuation"];
  };
  "/api/admin/info": {
    get: operations["AdminController_getInfo"];
  };
  "/api/admin/server-settings": {
    get: operations["AdminController_getServerSettings"];
    post: operations["AdminController_updateServerSettings"];
  };
  "/api/admin/logs": {
    get: operations["AdminController_getLogs"];
  };
  "/api/admin/logs/{logFile}": {
    get: operations["AdminController_downloadLogFile"];
  };
  "/api/admin/blocked-videos": {
    get: operations["AdminController_findAll"];
    post: operations["AdminController_create"];
  };
  "/api/admin/blocked-videos/{id}": {
    get: operations["AdminController_isVideoBlocked"];
    delete: operations["AdminController_delete"];
  };
  "/api/admin/users": {
    post: operations["AdminController_createUser"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    RegistrationDto: {
      username: string;
      password: string;
      captchaToken: string;
      captchaSolution: string;
    };
    CaptchaDto: {
      token: string;
      captchaImage: string;
    };
    SettingsDto: {
      chapters: boolean;
      theme: string;
      sponsorblockUrl: string;
      sponsorblockEnabled: boolean;
      sponsorblockSegmentSponsor: Record<string, never>;
      sponsorblockSegmentIntro: Record<string, never>;
      sponsorblockSegmentOutro: Record<string, never>;
      sponsorblockSegmentInteraction: Record<string, never>;
      sponsorblockSegmentSelfpromo: Record<string, never>;
      sponsorblockSegmentMusicOfftopic: Record<string, never>;
      sponsorblockSegmentPreview: Record<string, never>;
      sponsorblockSegmentFiller: Record<string, never>;
      autoplay: boolean;
      saveVideoHistory: boolean;
      showHomeSubscriptions: boolean;
      showHomeTrendingVideos: boolean;
      showRecommendedVideos: boolean;
      alwaysLoopVideo: boolean;
      hideComments: boolean;
      videoSpeedAsList: boolean;
      autoplayNextVideo: boolean;
      audioModeDefault: boolean;
      defaultVideoSpeed: number;
      maxVideoQuality: string;
      defaultAudioQuality: string;
      autoAdjustAudioQuality: boolean;
      autoAdjustVideoQuality: boolean;
      rewriteYouTubeURLs: boolean;
      hideShortsFromSearch: boolean;
    };
    UserprofileDto: {
      username: string;
      profileImage: string;
      settings: components["schemas"]["SettingsDto"];
      admin?: boolean;
    };
    VTThumbnailDto: {
      quality?: string;
      url: string;
      width: number;
      height: number;
    };
    VideoBasicInfoDto: {
      videoId: string;
      title: string;
      published?: number;
      publishedText: string;
      author: string;
      authorId: string;
      authorVerified?: boolean;
      authorThumbnails?: components["schemas"]["VTThumbnailDto"][];
      authorThumbnailUrl?: string;
      videoThumbnails: components["schemas"]["VTThumbnailDto"][];
      description?: string;
      viewCount: number;
      likeCount?: number;
      dislikeCount?: number;
      lengthSeconds?: number;
      lengthString?: string;
      live?: boolean;
    };
    VideoVisitDetailsDto: {
      videoDetails: components["schemas"]["VideoBasicInfoDto"];
      videoId: string;
      progressSeconds: number;
      lengthSeconds: number;
      /** Format: date-time */
      lastVisit: string;
    };
    UserprofileDetailsDto: {
      username: string;
      profileImage: string;
      videoHistory: components["schemas"]["VideoVisitDetailsDto"][];
      /** Format: date-time */
      registeredAt: string;
      totalVideosCount: number;
      totalTimeString: string;
      subscribedChannelsCount: number;
      admin: boolean;
    };
    SessionDto: {
      id: string;
      deviceName: string;
      deviceType: string;
      /** Format: date-time */
      updatedAt: string;
      /** Format: date-time */
      expires: string;
      current: boolean;
    };
    ChannelBasicInfoDto: {
      authorId: string;
      author: string;
      authorUrl?: string;
      authorThumbnails?: components["schemas"]["VTThumbnailDto"][];
      authorThumbnailUrl?: string;
      authorVerified?: boolean;
      subCount?: number;
      videoCount?: number;
      description?: string;
    };
    SubscribedChannelsResponseDto: {
      channels: components["schemas"]["ChannelBasicInfoDto"][];
      channelCount: number;
    };
    SubscriptionFeedResponseDto: {
      videoCount: number;
      videos: components["schemas"]["VideoBasicInfoDto"][];
      /** Format: date-time */
      lastRefresh: string;
      refreshInterval: number;
    };
    SubscriptionStatusDto: {
      channelId: string;
      name?: string;
      isSubscribed: boolean;
    };
    HistoryResponseDto: {
      videos: components["schemas"]["VideoVisitDetailsDto"][];
      videoCount: number;
    };
    VideoVisitDto: {
      videoId: string;
      progressSeconds: number;
      lengthSeconds: number;
      /** Format: date-time */
      lastVisit: string;
    };
    VTPreviewThumbnailDto: {
      urlTemplate: string;
      width: number;
      height: number;
      count: number;
      interval: number;
      columns: number;
      rows: number;
      previewThumbnailCount: number;
    };
    VTEndscreenElementDto: {
      position: {
        left?: number;
        top?: number;
      };
      dimensions: {
        width?: number;
        aspectRatio?: number;
      };
      startMs: number;
      endMs: number;
      thumbnails: components["schemas"]["VTThumbnailDto"][];
    };
    VTCaptionTrackDto: {
      baseUrl: string;
      name: string;
      languageCode: string;
    };
    VTInfoCardDto: {
      shortName: string;
      startMs: number;
      endMs: number;
      content: Record<string, never>;
    };
    VTAuthorDto: {
      id: string;
      name: string;
      thumbnails?: components["schemas"]["VTThumbnailDto"][];
      isVerified?: boolean;
      isArtist?: boolean;
      handle?: string;
      subscriberCount?: number;
    };
    VTVideoDto: {
      author?: components["schemas"]["VTAuthorDto"];
      description?: string;
      thumbnails?: components["schemas"]["VTThumbnailDto"][];
      richThumbnails?: components["schemas"]["VTThumbnailDto"][];
      published: {
        /** Format: date-time */
        date?: string;
        text?: string;
      };
      viewCount?: number;
      /** Format: date-time */
      upcoming?: string;
      live?: boolean;
      id: string;
      title: string;
      duration: {
        text?: string;
        seconds?: number;
      };
    };
    VTChapterDto: {
      title: string;
      startMs: number;
      thumbnails: components["schemas"]["VTThumbnailDto"][];
    };
    VTLegacyFormatDto: {
      mimeType: string;
      bitrate: number;
      averageBitrate: number;
      width: number;
      height: number;
      /** Format: date-time */
      lastModified: string;
      contentLength: number;
      quality: string;
      qualityLabel: string;
      fps: number;
      url: string;
      audioQuality: string;
      approxDurationMs: number;
      audioSampleRate: number;
      audioChannels: number;
      hasAudio: boolean;
      hasVideo: boolean;
    };
    VTVideoInfoDto: {
      id: string;
      title: string;
      subtitle: string;
      author: {
        id?: string;
        name?: string;
        thumbnails?: components["schemas"]["VTThumbnailDto"][];
        isVerified?: boolean;
        isArtist?: boolean;
        handle?: string;
        subscriberCount?: string;
      };
      description: string;
      thumbnails: components["schemas"]["VTThumbnailDto"][];
      duration: {
        text?: string;
        seconds?: number;
      };
      published: {
        /** Format: date-time */
        date?: string;
        text?: string;
      };
      viewCount: number;
      /** Format: date-time */
      upcoming?: string;
      live: boolean;
      watching?: number;
      unlisted: boolean;
      familyFriendly: boolean;
      ageRestricted?: boolean;
      likeCount: number;
      category: string;
      previewThumbnails: components["schemas"]["VTPreviewThumbnailDto"][];
      endscreen: {
        elements?: components["schemas"]["VTEndscreenElementDto"][];
        startMs?: number;
      };
      keywords: string[];
      captions: components["schemas"]["VTCaptionTrackDto"][];
      infoCards: components["schemas"]["VTInfoCardDto"][];
      recommendedVideos: components["schemas"]["VTVideoDto"][];
      chapters: components["schemas"]["VTChapterDto"][];
      commentCount: number;
      legacyFormats: components["schemas"]["VTLegacyFormatDto"][];
      dashManifest?: string;
      hlsManifestUrl?: string;
      dashManifestUrl?: string;
    };
    DislikeDto: {
      id: string;
      dateCreated: string;
      likes: number;
      dislikes: number;
      rating: number;
      viewCount: number;
      deleted: boolean;
    };
    SponsorBlockSegmentDto: {
      UUID: string;
      category: string;
      segment: number[];
      videoDuration: number;
      endPercentage?: number;
    };
    SponsorBlockSegmentsDto: {
      hash: string;
      segments: components["schemas"]["SponsorBlockSegmentDto"][];
      videoID: string;
    };
    VTSearchDto: {
      results: Record<string, never>[];
      estimatedResultCount: number;
      refinements: string[];
      continuation?: string;
    };
    ChannelImageDto: {
      url: string;
      width: number;
      height: number;
    };
    RelatedChannelDto: {
      channelName?: string;
      channelId?: string;
      channelUrl?: string;
      author: string;
      authorId: string;
      authorUrl: string;
      authorThumbnails: Record<string, never>[];
      videoCount: number;
      subscriberText: string;
      subscriberCount: number;
      verified: boolean;
      officialArtist: boolean;
      officialArist: boolean;
    };
    ChannelLinkDto: {
      url: string;
      icon: string;
      title: string;
    };
    ChannelInfoDto: {
      author: string;
      authorId: string;
      authorUrl: string;
      oResponse: Record<string, never>;
      authorBanners: components["schemas"]["ChannelImageDto"][];
      authorThumbnails: components["schemas"]["ChannelImageDto"][];
      subscriberText: string;
      subscriberCount: number;
      description: string;
      isFamilyFriendly: boolean;
      relatedChannels: {
        items?: components["schemas"]["RelatedChannelDto"][];
        continuation?: string | null;
      };
      allowedRegions: string[];
      isVerified: boolean;
      isOfficialArtist: boolean;
      tags: string[];
      channelIdType: number;
      channelTabs: string[];
      alertMessage: string;
      channelLinks: {
        primaryLinks?: components["schemas"]["ChannelLinkDto"][];
        secondaryLinks?: components["schemas"]["ChannelLinkDto"][];
      };
    };
    ChannelVideoDto: {
      author: string;
      authorId: string;
      durationText?: string;
      lengthSeconds?: number;
      liveNow: boolean;
      premiere: boolean;
      premium: boolean;
      publishedText: string;
      title: string;
      type: string;
      videoId: string;
      videoThumbnails: components["schemas"]["ChannelImageDto"][] | null;
      viewCount: number;
      viewCountText: string;
    };
    ChannelHomeItemDto: {
      shelfName: string;
      type: Record<string, never>;
      items: Record<string, never>;
    };
    ChannelHomeDto: {
      featuredVideo: components["schemas"]["ChannelVideoDto"];
      items: components["schemas"]["ChannelHomeItemDto"][];
    };
    ChannelVideosDto: {
      /** @enum {number} */
      channelIdType?: 0 | 1 | 2 | 3 | 4 | 5;
      alertMessage?: string;
      items?: components["schemas"]["ChannelVideoDto"][];
      continuation?: string;
    };
    ChannelVideosContinuationDto: {
      items?: components["schemas"]["ChannelVideoDto"][];
      continuation?: string;
    };
    ChannelPlaylistDto: {
      author: string;
      authorId: string;
      authorUrl: string;
      playlistId: string;
      playlistThumbnail: string;
      playlistUrl: string;
      title: string;
      type: string;
      videoCount: number;
    };
    ChannelPlaylistsDto: {
      channelIdType?: number;
      alertMessage?: string;
      items?: components["schemas"]["ChannelPlaylistDto"][];
      continuation?: string;
    };
    ChannelPlaylistsContinuationDto: {
      items?: components["schemas"]["ChannelPlaylistDto"][];
      continuation?: string;
    };
    ChannelSearchContinuationDto: {
      items?: components["schemas"]["ChannelVideoDto"][];
      continuation?: string;
    };
    RelatedChannelsContinuationDto: {
      items: Record<string, never>[];
      continuation: string;
    };
    ChannelCommunityPostDto: {
      postText: string;
      postId: string;
      author: string;
      authorThumbnails: string;
      publishedText: string;
      voteCount: string;
      commentCount: string;
      postContent: Record<string, never>;
    };
    ChannelCommunityPostsDto: {
      channelIdType: number;
      innerTubeApi: string;
      items: components["schemas"]["ChannelCommunityPostDto"][];
      continuation: string;
    };
    ChannelCommunityPostsContinuationDto: {
      innerTubeApi: string;
      items: components["schemas"]["ChannelCommunityPostDto"][];
      continuation: string;
    };
    ChannelStatsDto: {
      joinedDate: number;
      viewCount: number;
      location: string;
    };
    HomeFeedDto: {
      videos: components["schemas"]["VTVideoDto"][];
    };
    VTCommentDto: {
      id: string;
      content: string;
      pinned?: boolean;
      creatorHeart?: boolean;
      likeCount: number;
      replyCount: number;
      hasReplies?: boolean;
      isEdited?: boolean;
      replyContinuation?: string;
      creatorReplied?: boolean;
      creatorReplyThumbnail?: components["schemas"]["VTThumbnailDto"][];
      channelOwner?: boolean;
      channelMember?: boolean;
      published: {
        /** Format: date-time */
        date?: string;
        text?: string;
      };
      author: components["schemas"]["VTAuthorDto"];
    };
    VTCommentEmojiDto: {
      name: string;
      shortcuts: string[];
      thumbnails: components["schemas"]["VTThumbnailDto"][];
    };
    VTCommentsHeaderDto: {
      commentsCount: number;
      customEmojis: components["schemas"]["VTCommentEmojiDto"][];
    };
    VTCommentsResponseDto: {
      comments: components["schemas"]["VTCommentDto"][];
      header: components["schemas"]["VTCommentsHeaderDto"];
      continuation?: string;
    };
    VTCommentsReplyResponseDto: {
      comments: components["schemas"]["VTCommentDto"][];
      continuation?: string;
    };
    PlaylistImageDto: {
      url: string | null;
      width: number;
      height: number;
    };
    PlaylistItemDto: {
      title: string;
      index: number;
      id: string;
      shortUrl: string;
      url: string;
      author: {
        name?: string;
        url?: string;
        channelID?: string;
      };
      thumbnails: components["schemas"]["PlaylistImageDto"][];
      bestThumbnail: components["schemas"]["PlaylistImageDto"];
      isLive: boolean;
      duration: string | null;
      durationSec: number | null;
    };
    PlaylistResultDto: {
      id: string;
      url: string;
      title: string;
      estimatedItemCount: number;
      views: number;
      thumbnails: components["schemas"]["PlaylistImageDto"][];
      bestThumbnail: components["schemas"]["PlaylistImageDto"];
      lastUpdated: string;
      description: string | null;
      visibility: Record<string, never>;
      author: {
        name?: string;
        url?: string;
        avatars?: components["schemas"]["PlaylistImageDto"][];
        bestAvatar?: components["schemas"]["PlaylistImageDto"];
        channelID?: string;
      };
      items: components["schemas"]["PlaylistItemDto"][];
      continuation: Record<string, unknown> | null;
    };
    InfoDto: {
      serverIpV4: string;
      serverIpV6: string;
      proxyIpV4: string;
      proxyIpV6: string;
    };
    ServerSettingsDto: {
      registrationEnabled: boolean;
      requireLoginEverywhere: boolean;
    };
    LogFileDto: {
      name: string;
      size: number;
      created: number;
      lastModified: number;
    };
    LogsDto: {
      logFiles: components["schemas"]["LogFileDto"][];
      location: string;
    };
    UserDto: {
      username: string;
      password: string;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}

export type $defs = Record<string, never>;

export type external = Record<string, never>;

export interface operations {

  AuthController_login: {
    responses: {
      201: {
        content: never;
      };
    };
  };
  AuthController_logout: {
    responses: {
      201: {
        content: never;
      };
    };
  };
  /**
   * Register a new user
   * @description Request a captcha through the /auth/captcha endpoint,
   *     and pass its token and solution alongside the new user's credentials.
   */
  RegisterController_registerUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegistrationDto"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": Record<string, never>;
        };
      };
    };
  };
  /** Get a captcha */
  CaptchaController_getCaptcha: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["CaptchaDto"];
        };
      };
    };
  };
  UserController_getProfile: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UserprofileDto"];
        };
      };
    };
  };
  UserController_getProfileDetails: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["UserprofileDetailsDto"];
        };
      };
    };
  };
  UserController_getSessions: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SessionDto"][];
        };
      };
    };
  };
  UserController_getCurrentSession: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SessionDto"];
        };
      };
    };
  };
  UserController_updateSession: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  UserController_deleteSession: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  UserController_getExport: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  UserController_getProfileImage: {
    parameters: {
      path: {
        username: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  UserController_uploadProfileImage: {
    responses: {
      201: {
        content: never;
      };
    };
  };
  UserController_deleteProfileImage: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  UserController_deleteUser: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  UserController_changePassword: {
    responses: {
      201: {
        content: never;
      };
    };
  };
  SubscriptionsController_getSubscribedChannels: {
    parameters: {
      query?: {
        /** @example linu */
        filter?: string;
        /** @example author:1,authorVerified:-1 */
        sort?: string;
        /** @example 0 */
        start?: unknown;
        /** @example 30 */
        limit?: unknown;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SubscribedChannelsResponseDto"];
        };
      };
    };
  };
  SubscriptionsController_getSubscriptionVideos: {
    parameters: {
      query?: {
        start?: unknown;
        limit?: unknown;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SubscriptionFeedResponseDto"];
        };
      };
    };
  };
  SubscriptionsController_getSubscription: {
    parameters: {
      path: {
        channelId: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SubscriptionStatusDto"];
        };
      };
    };
  };
  SubscriptionsController_createSubscription: {
    parameters: {
      path: {
        channelId: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SubscriptionStatusDto"];
        };
      };
    };
  };
  SubscriptionsController_deleteSubscription: {
    parameters: {
      path: {
        channelId: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SubscriptionStatusDto"];
        };
      };
    };
  };
  SubscriptionsController_createMultipleSubscriptions: {
    responses: {
      201: {
        content: never;
      };
    };
  };
  NotificationsController_subscribeToNotifications: {
    responses: {
      201: {
        content: never;
      };
    };
  };
  SettingsController_getSettings: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SettingsDto"];
        };
      };
    };
  };
  SettingsController_setSettings: {
    responses: {
      204: {
        content: never;
      };
    };
  };
  HistoryController_getHistory: {
    parameters: {
      query: {
        sort: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["HistoryResponseDto"];
        };
      };
    };
  };
  HistoryController_deleteEntireHistory: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  HistoryController_getVideoVisit: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["VideoVisitDto"];
        };
      };
    };
  };
  HistoryController_setVideoVisit: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      201: {
        content: never;
      };
    };
  };
  HistoryController_deleteHistoryEntry: {
    parameters: {
      path: {
        videoId: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  HistoryController_deleteHistoryRange: {
    parameters: {
      path: {
        startDate: string;
        endDate: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  VideosController_getVideos: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["VTVideoInfoDto"];
        };
      };
    };
  };
  VideosController_getDash: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  VideosController_getDislikes: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["DislikeDto"];
        };
      };
    };
  };
  VideosController_getSkipSegments: {
    parameters: {
      query: {
        url: string;
      };
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["SponsorBlockSegmentsDto"];
        };
      };
    };
  };
  VideoplaybackController_getVideoplayback: {
    responses: {
      200: {
        content: never;
      };
    };
  };
  AutocompleteController_getQuery: {
    parameters: {
      query: {
        q: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": string[];
        };
      };
    };
  };
  SearchController_search: {
    parameters: {
      query: {
        q: string;
        upload_date?: Record<string, never>;
        type?: Record<string, never>;
        duration?: Record<string, never>;
        sort_by?: Record<string, never>;
        features?: Record<string, never>[];
        continuationString?: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["VTSearchDto"];
        };
      };
    };
  };
  ChannelsController_getTinyThumbnailJpg: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  ChannelsController_getTinyThumbnailWebp: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  ChannelsController_getChannelInfo: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelInfoDto"];
        };
      };
    };
  };
  ChannelsController_getChannelHome: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelHomeDto"];
        };
      };
    };
  };
  ChannelsController_getChannelVideos: {
    parameters: {
      query: {
        sort: string;
      };
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelVideosDto"];
        };
      };
    };
  };
  ChannelsController_getChannelVideosContinuation: {
    parameters: {
      query: {
        continuation: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelVideosContinuationDto"];
        };
      };
    };
  };
  ChannelsController_getChannelShorts: {
    parameters: {
      query: {
        sort: string;
      };
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelVideosDto"];
        };
      };
    };
  };
  ChannelsController_getChannelLivestreams: {
    parameters: {
      query: {
        sort: string;
      };
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelVideosDto"];
        };
      };
    };
  };
  ChannelsController_getChannelPlaylists: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelPlaylistsDto"];
        };
      };
    };
  };
  ChannelsController_getChannelPlaylistsContinuation: {
    parameters: {
      query: {
        continuation: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelPlaylistsContinuationDto"];
        };
      };
    };
  };
  ChannelsController_searchChannel: {
    parameters: {
      query: {
        query: string;
      };
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": Record<string, never>;
        };
      };
    };
  };
  ChannelsController_searchChannelContinuation: {
    parameters: {
      query: {
        continuation: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelSearchContinuationDto"];
        };
      };
    };
  };
  ChannelsController_getRelatedChannelsContinuation: {
    parameters: {
      query: {
        continuation: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["RelatedChannelsContinuationDto"];
        };
      };
    };
  };
  ChannelsController_getChannelCommunityPosts: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelCommunityPostsDto"];
        };
      };
    };
  };
  ChannelsController_getChannelCommunityPostsContinuation: {
    parameters: {
      query: {
        continuation: string;
        innertube: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelCommunityPostsContinuationDto"];
        };
      };
    };
  };
  ChannelsController_getChannelStats: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ChannelStatsDto"];
        };
      };
    };
  };
  HomepageController_getHomeFeed: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["HomeFeedDto"];
        };
      };
    };
  };
  ProxyController_getQuery: {
    parameters: {
      query: {
        url: string;
        local: boolean;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  ProxyController_proxyText: {
    parameters: {
      query: {
        url: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  ProxyController_proxyStream: {
    parameters: {
      query: {
        url: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  CommentsController_getComments: {
    parameters: {
      query?: {
        sortByNewest?: boolean;
        continuation?: string;
      };
      path: {
        videoId: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["VTCommentsResponseDto"];
        };
      };
    };
  };
  CommentsController_getCommentReplies: {
    parameters: {
      query: {
        replyContinuation: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["VTCommentsReplyResponseDto"];
        };
      };
    };
  };
  PlaylistsController_getPlaylist: {
    parameters: {
      query: {
        pages: number;
      };
      path: {
        playlistId: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["PlaylistResultDto"];
        };
      };
    };
  };
  PlaylistsController_getPlaylistContinuation: {
    parameters: {
      query: {
        continuationData: string[];
      };
    };
    responses: {
      200: {
        content: {
          "application/json": Record<string, never>;
        };
      };
    };
  };
  AdminController_getInfo: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["InfoDto"];
        };
      };
    };
  };
  AdminController_getServerSettings: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["ServerSettingsDto"];
        };
      };
    };
  };
  AdminController_updateServerSettings: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["ServerSettingsDto"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["ServerSettingsDto"];
        };
      };
    };
  };
  AdminController_getLogs: {
    responses: {
      200: {
        content: {
          "application/json": components["schemas"]["LogsDto"];
        };
      };
    };
  };
  AdminController_downloadLogFile: {
    parameters: {
      path: {
        logFile: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  AdminController_findAll: {
    responses: {
      200: {
        content: {
          "application/json": string[];
        };
      };
    };
  };
  AdminController_create: {
    requestBody: {
      content: {
        "application/json": string;
      };
    };
    responses: {
      201: {
        content: {
          "application/json": string;
        };
      };
    };
  };
  AdminController_isVideoBlocked: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: {
          "application/json": boolean;
        };
      };
    };
  };
  AdminController_delete: {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: {
        content: never;
      };
    };
  };
  AdminController_createUser: {
    requestBody: {
      content: {
        "application/json": components["schemas"]["UserDto"];
      };
    };
    responses: {
      201: {
        content: {
          "application/json": components["schemas"]["UserprofileDto"];
        };
      };
    };
  };
}