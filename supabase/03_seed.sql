-- =========================================================
-- Kids Play — Seed: Grades, Subjects, Topics
-- =========================================================

insert into kp_grades (id, name, level) values
  (5, 'Grade 5', 5),
  (6, 'Grade 6', 6),
  (7, 'Grade 7', 7),
  (8, 'Grade 8', 8);

insert into kp_subjects (name, emoji, color, sort_order) values
  ('Mathematics',     '🧮', '#6c5ce7', 1),
  ('Science',         '🔬', '#00b894', 2),
  ('English',         '📖', '#0984e3', 3),
  ('Social Studies',  '🌍', '#e17055', 4),
  ('Hindi',           '🪷', '#e84393', 5),
  ('Computer Science','💻', '#00cec9', 6);

-- Topics for Grade 5 Mathematics
with math as (select id from kp_subjects where name = 'Mathematics')
insert into kp_topics (subject_id, grade_id, name, description, sort_order)
select math.id, 5, t.name, t.desc, t.ord
from math, (values
  ('HCF',           'Highest Common Factor — find the greatest number that divides two numbers', 1),
  ('LCM',           'Least Common Multiple — find the smallest number divisible by both', 2),
  ('Fractions',     'Add, subtract, compare fractions', 3),
  ('Decimals',      'Understand and work with decimal numbers', 4),
  ('Multiplication','Multiply numbers including multi-digit', 5),
  ('Division',      'Divide numbers and find remainders', 6)
) as t(name, desc, ord);

-- Topics for Grade 5 Science
with sci as (select id from kp_subjects where name = 'Science')
insert into kp_topics (subject_id, grade_id, name, description, sort_order)
select sci.id, 5, t.name, t.desc, t.ord
from sci, (values
  ('Photosynthesis', 'How plants make their own food using sunlight', 1),
  ('Human Body',     'Parts of the human body and their functions', 2),
  ('Plants',         'Parts of plants and how they grow', 3),
  ('Food Chain',     'How energy flows through living things', 4),
  ('Matter',         'Solids, liquids and gases around us', 5)
) as t(name, desc, ord);

-- Topics for Grade 5 English
with eng as (select id from kp_subjects where name = 'English')
insert into kp_topics (subject_id, grade_id, name, description, sort_order)
select eng.id, 5, t.name, t.desc, t.ord
from eng, (values
  ('Vocabulary',          'Word meanings, synonyms and antonyms', 1),
  ('Grammar',             'Parts of speech and sentence structure', 2),
  ('Sentence Formation',  'Building correct and meaningful sentences', 3),
  ('Comprehension',       'Reading and understanding passages', 4)
) as t(name, desc, ord);
