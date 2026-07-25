# Database Scheme

## 1. user_data
berisi data pribadi pengguna

| Nama | Tipe Data | Default Value | Constrain |
|------|-----------|:--------------|-----------|
|id|**uuid**|gen_random_uuid()|Primary Key|
|create_at|**timestamptz**|now()| - |
|username|**varchar**|NULL| - |
|email|**varchar**|NULL| - |
|password|**varchar**|NULL| - |
|campus|**varchar**|NULL| - |
|major|**varchar**|NULL| - |
|nim|**int8**|NULL| - |
|semester|**int2**|NULL| - |
|batch|**int4**|NULL| - |
|photo|**varchar**|NULL| - |
|member|**text**|free|enum("free","silver","gold")|

---

## 2. schedules
berisi data schedule semua pengguna

| Nama | Tipe Data | Default Value | Constrain |
|------|-----------|:--------------|-----------|
|id|**uuid**|gen_random_uuid()|Primary Key|
|for_id|**uuid**|auth.uuid()| - |
|monday|**jsonb**| #schedules | - |
|tuesday|**jsonb**| #schedules | - |
|wednesday|**jsonb**| #schedules | - |
|thursday|**jsonb**| #schedules | - |
|friday|**jsonb**| #schedules | - |
|saturday|**jsonb**| #schedules | - |
|sunday|**jsonb**| #schedules | - |

untuk #schedules
| Nama | Tipe Data | Default Value | Constrain |
|------|-----------|:--------------|-----------|
|subject|**varchar**|NULL| - |
|time|**date**|NULL| - |

---

## 3. tasks
berisi data tugas kelas semua pengguna

| Nama | Tipe Data | Default Value | Constrain |
|------|-----------|:--------------|-----------|
|id|**uuid**|gen_random_uuid()|Primary Key|
|for_id|**uuid**|auth.uuid()| - |
|task|**varchar**|NULL| - |
|subject|**varchar**|NULL| - |
|lecturer|**varchar**|NULL| - |
|deadline|**date**|NULL| - |
|status|**boolean**|false| - |

---

## 4. todo
berisi data todolist semua pengguna

| Nama | Tipe Data | Default Value | Constrain |
|------|-----------|:--------------|-----------|
|id|**uuid**|gen_random_uuid()|Primary Key|
|for_id|**uuid**|auth.uuid()| - |
|task|**varchar**|NULL| - |
|description|**varchar**|NULL| - |
|deadline|**date**|NULL| optional |
|status|**boolean**|false| - |

---

## 5. stats
berisi data nilai-nilai semua pengguna

| Nama | Tipe Data | Default Value | Constrain |
|------|-----------|:--------------|-----------|
|id|**uuid**|gen_random_uuid()|Primary Key|
|for_id|**uuid**|auth.uuid()| - |
|semester|**int2**|NULL| - |
|tasks|**varchar**|NULL| - |
|value|**float4**|NULL| - |
|deadline|**date**|NULL| - |

---

## 6. lecturer
berisi data nilai-nilai semua pengguna

| Nama | Tipe Data | Default Value | Constrain |
|------|-----------|:--------------|-----------|
|id|**uuid**|gen_random_uuid()|Primary Key|
|for_id|**uuid**|auth.uuid()| - |
|name|**varchar**|NULL| - |
|nip|**int8**|NULL| - |
|subject|**float4**|NULL| - |