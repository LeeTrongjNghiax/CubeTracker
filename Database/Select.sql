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
AS lmao FROM `algorithm` WHERE 1

SELECT * FROM algorithm alg JOIN image img
ON img.id = alg.imageId WHERE img.content = '400000000500335550350003331111111115200222220666666000';

DELETE FROM algorithm WHERE id IN (
  'alg02170309012023',
  'alg04140309012023',
  'alg19100309012023',
  'alg25170309012023',
  'alg44100309012023',
  'alg55100309012023'
)