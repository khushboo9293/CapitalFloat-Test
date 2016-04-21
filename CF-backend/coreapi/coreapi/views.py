from rest_framework.response import Response
from rest_framework.views import APIView


class StringCombinationsAPIView(APIView):
    def get(self, request, format=None):
        string = request.query_params.get('string', None)
        list = combi(string)[:-1]
        return Response({'result':list, 'count':len(list)}, status=200)


def combi(s):
    if s == '':
        return []
    if len(s) == 1:
        return [s]
    list = []
    l1 = combi(s[1:])
    for string in l1:
        list.append(s[0] + '.' + string)
        list.append(s[0] + string)
    return list