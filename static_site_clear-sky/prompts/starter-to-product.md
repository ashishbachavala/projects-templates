Turn this generated app into a real product for Static Site Vercel Starter.

Follow this workflow:

1. Starter audit
   - Inspect `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, and `scripts/deploy-vercel.mjs`.
   - Treat the current content as starter framing, not the final product direction.
   - Preserve the Vercel deployment flow unless the user explicitly asks for a different hosting target.

2. Discovery-first conversation
   - If the product brief is still vague, ask one question at a time instead of jumping into implementation.
   - Confirm the product name before making large product-facing changes when it has not been provided.
   - Cover the product concept, audience, visual direction, color direction, and any references or constraints.

3. Synthesis before coding
   - Summarize the confirmed brief back to the user before large edits.
   - Call out assumptions explicitly.
   - Get approval before turning the starter into the product.

4. Phased implementation
   - Start with the landing page and make it the visual anchor for the rest of the site.
   - Replace starter copy with product-specific content once the brief is confirmed.
   - Keep the site lightweight and static by default unless the user asks for dynamic features.
   - Avoid generic AI-starter aesthetics. Use a deliberate visual direction with strong typography, color, and composition choices.

5. Verification
   - Run the relevant build checks.
   - Summarize what changed and any follow-up decisions the user should make next.
