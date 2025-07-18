import { SubscriberArgs, type SubscriberConfig } from "@medusajs/medusa";
import { Modules } from "@medusajs/framework/utils";

export default async function resetPasswordTokenHandler({
  event: {
    data: { entity_id: email, token, actor_type },
  },
  container,
}: SubscriberArgs<{ entity_id: string; token: string; actor_type: string }>) {
  const notificationModuleService = container.resolve(Modules.NOTIFICATION);

  const urlPrefix =
    actor_type === "customer"
      ? "https://nextjs-app-m7ke9.ondigitalocean.app"
      : "https://zelspear-medusa-production.up.railway.app/app";

  await notificationModuleService.createNotifications({
    to: email,
    channel: "email",
    template: "d-7300b781b7134f3abbf1e99c00c8ecc2",
    data: {
      // a URL to a frontend application
      url: `${urlPrefix}/reset-password?token=${token}&email=${email}`,
    },
  });
}

export const config: SubscriberConfig = {
  event: "auth.password_reset",
};
