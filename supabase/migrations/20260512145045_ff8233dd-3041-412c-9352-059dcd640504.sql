ALTER TABLE public.lead_magnet_downloads ADD COLUMN IF NOT EXISTS phone text;

DROP POLICY IF EXISTS "Anyone can submit a lead" ON public.lead_magnet_downloads;

CREATE POLICY "Anyone can submit a lead"
ON public.lead_magnet_downloads
FOR INSERT
TO anon, authenticated
WITH CHECK (
  email IS NOT NULL
  AND char_length(email) <= 255
  AND char_length(email) >= 3
  AND (name IS NULL OR char_length(name) <= 120)
  AND (phone IS NULL OR (char_length(phone) >= 6 AND char_length(phone) <= 32))
  AND lang = ANY (ARRAY['en'::text, 'es'::text])
);