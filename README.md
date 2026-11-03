# MOHAVEX.DIGITAL — Phase 1

Starter package for the MOHAVEX.DIGITAL project.

## Included
- Responsive mobile-first interface
- French, English, Hausa and Arabic interface labels
- Navigation placeholders for activities, academy, affiliate, wallet, marketplace and support
- Cloudflare Pages Function health endpoint at `/api/health`
- No real user accounts, money balances, payment processing or withdrawals in this phase

## Test on Android
1. Extract the ZIP with your file manager or ZArchiver.
2. Open `index.html` in Chrome.
3. This local preview is for interface testing only.

## Deploy with GitHub + Cloudflare Pages
1. Create a GitHub repository named `mohavex-digital`.
2. Upload the contents of this folder (not the ZIP itself) to the repository.
3. In Cloudflare, open **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
4. Connect GitHub and select `mohavex-digital`.
5. For this static starter, use no build command and set the build output directory to `/`.
6. Deploy. Future pushes to the connected branch can trigger deployments automatically.

## Next phases
Phase 2: authentication and database rules.
Phase 3: member dashboard and admin roles.
Phase 4: activities and affiliate tracking.
Phase 5: wallet ledger and withdrawal requests.
Phase 6: KomiPay server-side integration and transaction verification.
Phase 7: academy, marketplace, support and security review.

## Important security notes
- Never put KomiPay API keys, tokens, passwords or Firebase service credentials in browser JavaScript or a public GitHub repository.
- Payment status must be verified server-side with KomiPay before a wallet ledger is credited.
- Never treat a browser redirect or a user-provided screenshot as proof of payment.
- Use KomiPay sandbox/testing first. Live payment activation depends on your approved merchant account and API credentials.
- Do not promise guaranteed income. Affiliate commissions should be tied to eligible real sales or services.
- This starter is not production-ready for handling personal data or money.
