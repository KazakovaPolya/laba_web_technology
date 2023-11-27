import cgi,sys
form = cgi.FieldStorage()
print("Content-­type: text/html")
elements_num = 6
html1 = """
<head>
<TITLE>таблица с анкетой</TITLE>
<link rel="stylesheet" href="../style/index.css">
<link rel="stylesheet" href="../style/form.css">
</head>
<body class="body_back">
<H1>Анкета пользователя</H1>
<table class="tbl_back">
"""
f = open("a.txt", "a", encoding="utf-8")
# печать заголовка таблицы
print (html1)

ll = ['Имя','Фамилия','Отчество', 'Любимый тип графических файлов','Статус пользователя','Используемые графические редакторы']
for head in ll:
    ss = '<td>'+head+'</td>'
    print (ss)
print ('</tr> <tr>')

data = ['','','','','','']; i=0
for field in ('name', 'surname', 'patr', 'filetype', 'job', 'prog'):
    if not field in form:
        data[i] = '(unknown)'
    else:
        if not isinstance(form[field], list):
            data[i] = form[field].value
        else:
            values = [x.value for x in form[field]]
            data[i] = ' and '.join(values)
    f.write(data[i] + " ")
    i+=1
f.write("\n")
f.close()
for el in data:
   print ('<td> %s </td>'% el)
print ('</tr> </table>')
print('</body>')