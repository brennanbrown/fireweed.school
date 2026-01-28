# Production Deployment Checklist

## Pre-deployment
- [ ] Run `npm run build` locally to verify everything builds correctly
- [ ] Test all links and forms on the built site
- [ ] Check responsive design on mobile/tablet/desktop
- [ ] Verify all images are loading correctly
- [ ] Test the Netlify form submission
- [ ] Ensure all environment variables are set (if any)

## Netlify Setup
- [ ] Connect repository to Netlify
- [ ] Verify build command: `npm run build`
- [ ] Verify publish directory: `public`
- [ ] Set up custom domain (if applicable)
- [ ] Configure SSL certificate
- [ ] Set up form notifications:
  - Go to Site settings → Forms → Form notifications
  - Add email notification for the "waitlist" form

## Post-deployment
- [ ] Test the live site thoroughly
- [ ] Submit a test form to verify notifications work
- [ ] Check Google PageSpeed Insights for performance
- [ ] Set up analytics if needed (Google Analytics, etc.)
- [ ] Test the floating CTA button
- [ ] Verify all social links work correctly

## Ongoing Maintenance
- [ ] Regular backup of form submissions
- [ ] Monitor site performance
- [ ] Update dependencies as needed
- [ ] Renew domain if applicable
