from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'base.html')

def gpme_e6(request):
    context = {
        'matiere': 'GPME E6',
        'description': 'Gestion et Pilotage des Ressources'
    }
    return render(request, 'cours/gpme_e6.html', context)

def gpme_e51(request):
    context = {
        'matiere': 'GPME E51',
        'description': 'Analyse Financière et Stratégique'
    }
    return render(request, 'cours/gpme_e51.html', context)

def gpme_ebp(request):
    context = {
        'matiere': 'GPME EBP',
        'description': 'Gestion Comptable et Logiciel'
    }
    return render(request, 'cours/gpme_ebp.html', context)

def mco_e5(request):
    context = {
        'matiere': 'MCO E5',
        'description': 'Management Commercial Opérationnel'
    }
    return render(request, 'cours/mco_e5.html', context)
