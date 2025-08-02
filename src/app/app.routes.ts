import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModerationComponent } from './moderation/moderation.component';
import { FacebookMagicComponent } from './facebook-magic/facebook-magic.component';
import { InstagramMagicComponent } from './instagram-magic/instagram-magic.component';
import { SnapchatMagicComponent } from './snapchat-magic/snapchat-magic.component';
import { TelegramMagicComponent } from './telegram-magic/telegram-magic.component';
import { TiktokMagicComponent } from './tiktok-magic/tiktok-magic.component';
import { WhatsappMagicComponent } from './whatsapp-magic/whatsapp-magic.component';
import { SettingsComponent } from './settings/settings.component';

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
