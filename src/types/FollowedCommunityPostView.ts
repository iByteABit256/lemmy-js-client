// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.
import type { Community } from "./Community";
import type { Post } from "./Post";

export interface FollowedCommunityPostView {
  community: Community;
  pending: boolean;
  notifications_enabled: boolean;
  post: Post;
  post_read: boolean;
}
