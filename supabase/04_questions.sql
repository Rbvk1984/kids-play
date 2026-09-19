-- =========================================================
-- Kids Play — Sample Questions (40 total, Phase 1)
-- Grade 5: Maths HCF (10), LCM (10), Science Photosynthesis (10), English Vocabulary (10)
-- =========================================================

-- Helper to get topic id by name
-- Usage: run after 03_seed.sql

-- ---- Grade 5 Maths: HCF ----
do $$
declare t_id uuid;
begin
  select id into t_id from kp_topics where name = 'HCF' and grade_id = 5;

  -- Q1
  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the HCF of 24 and 36?', 'C',
      'HCF is the largest number that divides both. Factors of 24: 1,2,3,4,6,8,12,24. Factors of 36: 1,2,3,4,6,9,12,18,36. The greatest common factor is 12.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','6'),('B','8'),('C','12'),('D','18')) as o(l,v);

  -- Q2
  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What does HCF stand for?', 'B',
      'HCF stands for Highest Common Factor — it is the highest (greatest) number that divides two or more numbers exactly.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Highest Common Fraction'),('B','Highest Common Factor'),('C','High Count Factor'),('D','Highest Count Fraction')) as o(l,v);

  -- Q3
  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the HCF of 16 and 24?', 'B',
      'Factors of 16: 1,2,4,8,16. Factors of 24: 1,2,3,4,6,8,12,24. The largest common factor is 8.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','4'),('B','8'),('C','12'),('D','16')) as o(l,v);

  -- Q4
  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the HCF of 15 and 25?', 'A',
      'Factors of 15: 1,3,5,15. Factors of 25: 1,5,25. The greatest common factor is 5.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','5'),('B','10'),('C','15'),('D','25')) as o(l,v);

  -- Q5
  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the HCF of 48 and 72?', 'D',
      'Factors of 48: 1,2,3,4,6,8,12,16,24,48. Factors of 72: 1,2,3,4,6,8,9,12,18,24,36,72. The greatest common factor is 24.',
      'hard', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','8'),('B','12'),('C','18'),('D','24')) as o(l,v);

  -- Q6
  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the HCF of 18 and 27?', 'B',
      'Factors of 18: 1,2,3,6,9,18. Factors of 27: 1,3,9,27. The greatest common factor is 9.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','3'),('B','9'),('C','18'),('D','27')) as o(l,v);

  -- Q7
  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'HCF of 12 and 18 is:', 'C',
      'Factors of 12: 1,2,3,4,6,12. Factors of 18: 1,2,3,6,9,18. The greatest common factor is 6.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','2'),('B','3'),('C','6'),('D','9')) as o(l,v);

  -- Q8
  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the HCF of 100 and 75?', 'C',
      'Factors of 100: 1,2,4,5,10,20,25,50,100. Factors of 75: 1,3,5,15,25,75. The greatest common factor is 25.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','5'),('B','10'),('C','25'),('D','50')) as o(l,v);

  -- Q9
  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'Which pair of numbers has HCF = 7?', 'B',
      '14 = 7×2 and 21 = 7×3. Both are divisible by 7, making 7 their HCF. 7 is the greatest number that divides both exactly.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','12 and 21'),('B','14 and 21'),('C','14 and 20'),('D','7 and 14')) as o(l,v);

  -- Q10
  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'The HCF of two numbers is always _____ than or equal to the smaller number.', 'A',
      'The HCF cannot be greater than either number because a factor must divide a number exactly. So HCF ≤ smaller number.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','less'),('B','greater'),('C','equal'),('D','double')) as o(l,v);
end;
$$;

-- ---- Grade 5 Maths: LCM ----
do $$
declare t_id uuid;
begin
  select id into t_id from kp_topics where name = 'LCM' and grade_id = 5;

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the LCM of 4 and 6?', 'B',
      'Multiples of 4: 4,8,12,16... Multiples of 6: 6,12,18... The smallest common multiple is 12.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','6'),('B','12'),('C','18'),('D','24')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What does LCM stand for?', 'C',
      'LCM stands for Least Common Multiple — the smallest number that is a multiple of both given numbers.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Least Common Measure'),('B','Large Common Multiple'),('C','Least Common Multiple'),('D','Lowest Common Multiply')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the LCM of 8 and 12?', 'D',
      'Multiples of 8: 8,16,24,32... Multiples of 12: 12,24,36... The smallest number in both lists is 24.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','12'),('B','16'),('C','20'),('D','24')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the LCM of 5 and 7?', 'C',
      '5 and 7 share no common factors other than 1, so their LCM = 5 × 7 = 35.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','5'),('B','7'),('C','35'),('D','70')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the LCM of 6 and 9?', 'B',
      'Multiples of 6: 6,12,18,24... Multiples of 9: 9,18,27... The smallest common multiple is 18.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','9'),('B','18'),('C','27'),('D','54')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the LCM of 4 and 8?', 'B',
      '8 is a multiple of 4 (4×2=8), so the LCM of 4 and 8 is just 8 — the larger number.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','4'),('B','8'),('C','12'),('D','16')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the LCM of 10 and 15?', 'C',
      'Multiples of 10: 10,20,30,40... Multiples of 15: 15,30,45... Smallest common multiple is 30.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','10'),('B','15'),('C','30'),('D','60')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the LCM of 6 and 8?', 'D',
      'Multiples of 6: 6,12,18,24... Multiples of 8: 8,16,24... The first common multiple is 24.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','6'),('B','8'),('C','16'),('D','24')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the LCM of 12 and 18?', 'C',
      'Multiples of 12: 12,24,36,48... Multiples of 18: 18,36,54... Smallest common multiple is 36.',
      'hard', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','18'),('B','24'),('C','36'),('D','72')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'The LCM of two numbers is always _____ than or equal to the larger number.', 'B',
      'LCM must be a multiple of both numbers, so it cannot be smaller than the larger one. LCM ≥ larger number.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','less'),('B','greater'),('C','half'),('D','double')) as o(l,v);
end;
$$;

-- ---- Grade 5 Science: Photosynthesis ----
do $$
declare t_id uuid;
begin
  select id into t_id from kp_topics where name = 'Photosynthesis' and grade_id = 5;

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'Which part of a plant mainly carries out photosynthesis?', 'B',
      'Leaves contain chlorophyll and have a large flat surface to absorb sunlight. They are the main site of photosynthesis.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Roots'),('B','Leaves'),('C','Stem'),('D','Flowers')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What gas do plants absorb from the air during photosynthesis?', 'C',
      'Plants take in carbon dioxide (CO₂) through tiny holes called stomata in their leaves. This CO₂ is used along with water and sunlight to make food.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Oxygen'),('B','Nitrogen'),('C','Carbon dioxide'),('D','Hydrogen')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What gas do plants release during photosynthesis?', 'A',
      'Plants release oxygen (O₂) as a by-product of photosynthesis. This oxygen is what humans and animals breathe!',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Oxygen'),('B','Carbon dioxide'),('C','Nitrogen'),('D','Water vapour')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the green pigment in leaves called?', 'D',
      'Chlorophyll is the green pigment found in chloroplasts. It captures sunlight energy, which drives the photosynthesis process.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Glucose'),('B','Starch'),('C','Carotene'),('D','Chlorophyll')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What food substance do plants produce through photosynthesis?', 'A',
      'Plants produce glucose (a type of sugar) during photosynthesis. Glucose provides energy for the plant to grow and function.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Glucose'),('B','Protein'),('C','Fat'),('D','Vitamins')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'Which of these does a plant NOT need for photosynthesis?', 'D',
      'Photosynthesis requires sunlight, water (from roots) and carbon dioxide (from air). Soil provides minerals but is NOT directly needed for photosynthesis itself.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Sunlight'),('B','Water'),('C','Carbon dioxide'),('D','Soil')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'Where in the plant cell does photosynthesis take place?', 'C',
      'Photosynthesis occurs in chloroplasts — tiny structures inside plant cells that contain chlorophyll.',
      'hard', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Nucleus'),('B','Cell wall'),('C','Chloroplast'),('D','Vacuole')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'Water used in photosynthesis is absorbed by which part of the plant?', 'B',
      'Roots absorb water from the soil. This water travels up through the stem to the leaves where it is used in photosynthesis.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Leaves'),('B','Roots'),('C','Flowers'),('D','Bark')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'Why are leaves usually flat and broad?', 'A',
      'A large flat surface helps leaves absorb more sunlight. More sunlight means the plant can make more food through photosynthesis.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','To absorb more sunlight'),('B','To store water'),('C','To attract insects'),('D','To release carbon dioxide')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'The process by which plants make their own food is called:', 'C',
      'Photosynthesis (from Greek: photo = light, synthesis = making) is the process by which plants use sunlight, water, and carbon dioxide to make glucose.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Respiration'),('B','Transpiration'),('C','Photosynthesis'),('D','Germination')) as o(l,v);
end;
$$;

-- ---- Grade 5 English: Vocabulary ----
do $$
declare t_id uuid;
begin
  select id into t_id from kp_topics where name = 'Vocabulary' and grade_id = 5;

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'Which word is a synonym of "happy"?', 'B',
      'A synonym is a word with the same or similar meaning. "Joyful" means feeling great happiness — it is a synonym of "happy".',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Sad'),('B','Joyful'),('C','Angry'),('D','Tired')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the antonym of "hot"?', 'C',
      'An antonym is a word with the opposite meaning. "Cold" is the opposite of "hot".',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Warm'),('B','Boiling'),('C','Cold'),('D','Mild')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What does the word "enormous" mean?', 'A',
      '"Enormous" means very, very large or huge in size. Example: "The elephant was an enormous animal."',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Very large'),('B','Very small'),('C','Very fast'),('D','Very quiet')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the plural of "child"?', 'D',
      '"Children" is the irregular plural of "child". Unlike most nouns, we do not add "s" — English has some special plural forms.',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Childs'),('B','Childen'),('C','Childer'),('D','Children')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'Which word is a synonym of "brave"?', 'B',
      '"Courageous" means having the ability to face danger or difficulty without fear — a synonym of "brave".',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Fearful'),('B','Courageous'),('C','Timid'),('D','Nervous')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the antonym of "ancient"?', 'C',
      '"Ancient" means very old. Its antonym (opposite) is "modern" — meaning new or of the present time.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Old'),('B','Historical'),('C','Modern'),('D','Classic')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'Which word means "to speak very softly and quietly"?', 'A',
      '"Whisper" means to speak very softly so only nearby people can hear. Example: "She whispered a secret in his ear."',
      'easy', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Whisper'),('B','Shout'),('C','Mumble'),('D','Scream')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What is the antonym of "transparent"?', 'C',
      '"Transparent" means you can see through it (like glass). "Opaque" is the opposite — you cannot see through it (like a wall).',
      'hard', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Clear'),('B','Shiny'),('C','Opaque'),('D','Bright')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'What does "scarce" mean?', 'B',
      '"Scarce" means not enough of something — it is hard to find or get. Example: "Water is scarce in the desert."',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Plentiful'),('B','Rare or not enough'),('C','Beautiful'),('D','Expensive')) as o(l,v);

  with q as (insert into kp_questions (topic_id, question_text, correct_answer, explanation, difficulty, points)
    values (t_id, 'Which word is a synonym of "rapid"?', 'D',
      '"Rapid" means moving or happening very quickly. "Swift" also means fast and moving with great speed.',
      'medium', 10) returning id)
  insert into kp_question_options (question_id, letter, option_text)
  select q.id, l, v from q, (values ('A','Slow'),('B','Careful'),('C','Heavy'),('D','Swift')) as o(l,v);
end;
$$;
