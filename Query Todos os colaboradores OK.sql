select
p.id,
p.post_title as funcionario, 
m1.meta_value as ramal,
m2.meta_value as cel,	
m3.meta_value as funcao,
m4.meta_value as email,
m5.meta_value as setor,
p1.guid
from wp_posts p 
inner join wp_postmeta m1 
	on m1.post_id = p.id and m1.meta_key = 'ramal'
inner join wp_postmeta m2 
	on m2.post_id = p.id and m2.meta_key = 'corporativos'
inner join wp_postmeta m3 
	on m3.post_id = p.id and m3.meta_key = 'funcao'
inner join wp_postmeta m4
    on m4.post_id = p.id and m4.meta_key = 'email'    
inner join wp_postmeta m5
    on m5.post_id = p.id and m5.meta_key = 'grupo'
 left join wp_posts p1 
    on p.id = p1.post_parent 
 and  p1.post_mime_type = 'image/jpeg' and p1.id = (select max(id) from wp_posts p3 where p3.post_parent = p.id)
 
  
    