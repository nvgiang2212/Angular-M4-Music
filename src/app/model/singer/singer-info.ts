import {Song} from '../song/song';
import {SignUpInfo} from "../userManager/Signup-Infor";

export class SingerInfo {
  id: number;
  nameSinger: string;
  singerAvatar: string;
  users: SignUpInfo;
  songs: Song[];
}
