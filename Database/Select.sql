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