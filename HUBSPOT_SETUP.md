# HubSpot Forms Integration Setup Guide

This guide will help you set up the HubSpot Forms API integration for the Enterprise Demo Request form.

## Prerequisites

- Free HubSpot account (or paid plan)
- Admin access to HubSpot portal

## Step 1: Create HubSpot Account

1. Go to https://www.hubspot.com/products/get-started
2. Sign up for a free account
3. Complete the onboarding process

## Step 2: Find Your Portal ID

1. Log into your HubSpot account
2. Click your **account name** in the top-right corner
3. Select **Account & Billing**
4. Your **Portal ID** (or Hub ID) is displayed at the top
5. Copy this ID

Example: `12345678`

## Step 3: Create Custom Properties

Before creating the form, set up custom properties for fields that aren't in HubSpot by default:

### 3a. Navigate to Properties

1. Go to **Settings** (gear icon in top-right)
2. Click **Data Management** → **Properties**
3. Click **Create property**

### 3b. Create These Custom Properties

Create the following custom properties for **Contact** object:

#### Property 1: Organization Type
- **Object:** Contact
- **Group:** Contact information
- **Label:** Organization Type
- **Internal name:** `organization_type`
- **Field type:** Dropdown select
- **Options:**
  - Practice
  - Group
  - Health System
  - Vendor
  - Other

#### Property 2: Timeline
- **Object:** Contact
- **Group:** Contact information
- **Label:** Timeline
- **Internal name:** `timeline`
- **Field type:** Dropdown select
- **Options:**
  - 0–30 days
  - 30–90 days
  - Exploring

#### Property 3: Deployment Preference
- **Object:** Contact
- **Group:** Contact information
- **Label:** Deployment Preference
- **Internal name:** `deployment_preference`
- **Field type:** Dropdown select
- **Options:**
  - VPC
  - On-Prem
  - Not sure

## Step 4: Create the Form

1. In HubSpot, go to **Marketing** → **Lead Capture** → **Forms**
2. Click **Create form**
3. Select **Embedded form**
4. Choose **Blank template**
5. Add the following fields (in order):

   - **First Name** (default property)
   - **Last Name** (default property)
   - **Email** (default property) - mark as required
   - **Company Name** (default property) - mark as required
   - **Job Title** (default property) - mark as required
   - **Organization Type** (custom property) - mark as required
   - **Timeline** (custom property) - mark as required
   - **Deployment Preference** (custom property) - mark as required

6. Configure form settings:
   - **Form name:** Enterprise Demo Request
   - **Thank you message:** Custom message or redirect
   - **Email notifications:** Set up to notify your team

7. Click **Publish**

## Step 5: Get Your Form ID

After publishing the form:

1. Click on the form name to view it
2. Click **Share** or **Embed**
3. Look for the embed code
4. Find the Form ID in the code

Example embed code:
```html
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "12345678",
    formId: "abc-123-def-456-ghi-789"  ← This is your Form ID
  });
</script>
```

Copy the `formId` value: `abc-123-def-456-ghi-789`

## Step 6: Configure Environment Variables

1. Open `/nuvii-systems-site/.env.local` file
2. Replace the placeholder values:

```bash
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=12345678
NEXT_PUBLIC_HUBSPOT_FORM_ID=abc-123-def-456-ghi-789
```

3. Save the file

## Step 7: Restart Development Server

If your dev server is running, restart it to load the new environment variables:

```bash
# Stop the current dev server (Ctrl+C)
npm run dev
```

## Step 8: Test the Integration

1. Visit http://localhost:3000/demo
2. Fill out the demo request form
3. Submit the form
4. Check HubSpot:
   - Go to **Contacts** → **Contacts**
   - You should see a new contact with all the form data

## Step 9: Configure Email Notifications (Optional)

1. In HubSpot, go to your form settings
2. Click **Options** tab
3. Under **Email notifications**, add:
   - Your email address
   - Team members who should receive notifications
4. Save changes

## Step 10: Set Up Workflows (Optional)

Create automated workflows in HubSpot:

1. Go to **Automation** → **Workflows**
2. Create workflow triggered by form submission
3. Examples:
   - Send welcome email to prospect
   - Create task for sales team
   - Add to specific list
   - Update contact properties

## Deployment to Vercel

When deploying to production:

1. Go to Vercel Dashboard → Your Project → **Settings** → **Environment Variables**
2. Add the same environment variables:
   - `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`
   - `NEXT_PUBLIC_HUBSPOT_FORM_ID`
3. Redeploy your application

## Troubleshooting

### Form Submission Not Working

1. **Check Console Logs:** Open browser DevTools → Console
2. **Verify IDs:** Make sure Portal ID and Form ID are correct
3. **Check Custom Properties:** Ensure all custom properties are created with exact internal names
4. **CORS Issues:** HubSpot Forms API allows cross-origin requests by default
5. **Test in Incognito:** Rule out browser extensions interfering

### Contact Not Appearing in HubSpot

1. Check **Spam** folder in HubSpot Contacts
2. Verify form is **published**
3. Check form submission history in HubSpot form analytics

### Environment Variables Not Loading

1. Restart dev server after changing `.env.local`
2. Make sure file is named exactly `.env.local` (not `.env` or `.env.development`)
3. Verify variables start with `NEXT_PUBLIC_` for client-side access

## Testing Checklist

- [ ] HubSpot account created
- [ ] Portal ID obtained
- [ ] Custom properties created (organization_type, timeline, deployment_preference)
- [ ] Form created in HubSpot
- [ ] Form ID obtained
- [ ] .env.local file configured
- [ ] Dev server restarted
- [ ] Test submission completed
- [ ] Contact appears in HubSpot
- [ ] Email notification received (if configured)

## Support

If you need help:
- HubSpot Support: https://help.hubspot.com/
- HubSpot Community: https://community.hubspot.com/
- HubSpot Forms API Docs: https://developers.hubspot.com/docs/api/marketing/forms

## Next Steps

After successful integration:

1. **Set up email workflows** for automatic follow-up
2. **Create lists** to segment demo requests by role/timeline
3. **Configure sales pipeline** to track demo progress
4. **Set up reporting** to measure conversion rates
5. **Add lead scoring** based on organization type and timeline
