SELECT alg.content FROM 
algorithm alg INNER JOIN 
algorithmtag algtag 
ON alg.id = algtag.algId
HAVING algtag.id = "EP" and algtag.tagid = "CP"

SELECT c1 FROM
(
  SELECT alg.content AS c1 FROM 
  algorithm alg INNER JOIN 
  algorithmtag algtag 
  ON alg.id = algtag.algId
  WHERE algtag.tagid = "EP"
) q1
INNER JOIN
(
  SELECT alg.content AS c2 FROM 
  algorithm alg INNER JOIN 
  algorithmtag algtag 
  ON alg.id = algtag.algId
  WHERE algtag.tagid = "CP"
) q2
ON q1.c1 = q2.c2

SELECT 
CONCAT(
  CONCAT(
    CONCAT(
      CONCAT(
        "('", CONCAT(
          'at', SUBSTRING(id, 4)
        )
      ), "', '"
    ), id
  ), "', 'OLL'),"
) 
AS lmao FROM algorithm WHERE 1

-- AVG

SELECT AVG(allTime.time) AS 'ao' FROM (
  SELECT time FROM algorithmrecord WHERE time NOT IN (
    ( 
      SELECT MAX(time) FROM algorithmrecord WHERE algorithmid = 'alg20010501061953' 
    ), 
    ( 
      SELECT MIN(time) FROM algorithmrecord WHERE algorithmid = 'alg20010501061953' 
    )
  ) AND algorithmid = 'alg20010501061953' LIMIT 5
) allTime

-- MEAN

SELECT AVG(time) AS 'mean' FROM algorithmrecord WHERE algorithmid = 'alg20010501061953';