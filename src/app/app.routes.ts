import { Routes } from '@angular/router';
import { HomeComponent } from './sidebar/home/home.component';
import { ModerationComponent } from './sidebar/moderation/moderation.component';
import { FacebookMagicComponent } from './sidebar/magic/facebook-magic/facebook-magic.component';
import { InstagramMagicComponent } from './sidebar/magic/instagram-magic/instagram-magic.component';
import { SnapchatMagicComponent } from './sidebar/magic/snapchat-magic/snapchat-magic.component';
import { TelegramMagicComponent } from './sidebar/magic/telegram-magic/telegram-magic.component';
import { TiktokMagicComponent } from './sidebar/magic/tiktok-magic/tiktok-magic.component';
import { WhatsappMagicComponent } from './sidebar/magic/whatsapp-magic/whatsapp-magic.component';
import { SettingsComponent } from './sidebar/settings/settings.component';

export const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Moderation', component: ModerationComponent },
  { path: 'Magic/Facebook', component: FacebookMagicComponent },
  { path: 'Magic/Instagram', component: InstagramMagicComponent },
  { path: 'Magic/Snapchat', component: SnapchatMagicComponent },
  { path: 'Magic/Telegram', component: TelegramMagicComponent },
  { path: 'Magic/TikTok', component: TiktokMagicComponent },
  { path: 'Magic/WhatsApp', component: WhatsappMagicComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: '**', redirectTo: 'Home' },
];
