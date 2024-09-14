from flask import Flask, render_template, request, redirect, url_for
from flask_cors import CORS
import numpy as np
from src.AIDRP.pipeline.prediction import PredictionPipeline

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})


# Mapping dictionaries
age_dict = {'[0-10)':1, '[10-20)':2, '[20-30)':3, '[30-40)':4, '[40-50)':5, '[50-60)':6,'[60-70)':7, '[70-80)':8, '[80-90)':9, '[90-100)':10}
race_dict = {'AfricanAmerican':0, 'Asian':1, 'Caucasian':2, 'Hispanic':3, 'Other':4}
admission_source_id_dict = {'9, 15, 17, 20, 21':9,'1, 2, 3':1,'4, 10, 22':4,'5, 6, 18, 19, 25, 26':5,'11, 12, 13, 14':11}
admission_type_id_dict ={'1, 4':1,'2, 7':2,'3':3,'4':4,'5, 6, 8':5}
discharge_disposition_id_dict={'1, 6, 8': 1,'2, 9, 10, 23, 27, 28, 29':2,'3, 4, 5, 15, 24':3,'11, 19, 20, 21':11,'12, 18, 25, 26':18,'13, 14':13,'16, 17':16}
change_dict = {'No':0, 'Yes':1}
icd9_codes_dict = {'001-139': 1, '140-239': 2, '240-279': 3, '280-289': 4, '290-319': 5, '320-389': 6, '390-459': 7, '460-519': 8, '520-579': 9, '580-629': 10, '630-679': 11, '680-709': 12, '710-739': 13, '740-759': 14, '760-779': 15, '780-799': 16, '800-999': 17, 'E and V codes': 18}
max_glu_serum_dict = {"Norm": 1, ">200": 1.5, ">300": 2.5}
A1Cresult_dict = {"Norm": 1, ">7": 2, ">8": 2.5}
diabetesMed_dict = {'No':0, 'Yes':1}
medicines_dict = {'No':1, 'Up':3, 'Steady':2, 'Down':0}

@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        # Collect form data
        data = [
            age_dict[request.form['age']],
            race_dict[request.form['race']],
            admission_source_id_dict[request.form['admission_source_id']],
            admission_type_id_dict[request.form['admission_type_id']],
            discharge_disposition_id_dict[request.form['discharge_disposition_id']],
            int(request.form['num_lab_procedures']),
            int(request.form['num_medications']),
            change_dict[request.form['change']],
            int(request.form['number_diagnoses']),
            int(request.form['num_procedures']),
            int(request.form['number_outpatient']),
            int(request.form['number_inpatient']),
            int(request.form['number_emergency']),
            int(request.form['time_in_hospital']),
            icd9_codes_dict[request.form['diag_1']],
            icd9_codes_dict[request.form['diag_2']],
            icd9_codes_dict[request.form['diag_3']],
            max_glu_serum_dict[request.form['max_glu_serum']],
            A1Cresult_dict[request.form['A1Cresult']],
            diabetesMed_dict[request.form['diabetesMed']],
            medicines_dict[request.form['metformin']],
            medicines_dict[request.form['insulin']],
            medicines_dict[request.form['glipizide']],
            medicines_dict[request.form['glyburide']],
            medicines_dict[request.form['pioglitazone']]
        ]

        data = np.array(data).reshape(1, 25)

        obj = PredictionPipeline()
        predicted_value = obj.predict(data)

        result = "There is a chance that the patient will be readmitted within 30 days!" if predicted_value == 1 else "The patient is safe to discharge"

        return redirect(url_for('result', prediction=result))

    return render_template('form.html', 
                           age_dict=age_dict,
                           race_dict=race_dict,
                           admission_source_id_dict=admission_source_id_dict,
                           admission_type_id_dict=admission_type_id_dict,
                           discharge_disposition_id_dict=discharge_disposition_id_dict,
                           change_dict=change_dict,
                           icd9_codes_dict=icd9_codes_dict,
                           max_glu_serum_dict=max_glu_serum_dict,
                           A1Cresult_dict=A1Cresult_dict,
                           diabetesMed_dict=diabetesMed_dict,
                           medicines_dict=medicines_dict)

@app.route('/result')
def result():
    prediction = request.args.get('prediction')
    return render_template('result.html', result=prediction)

if __name__ == '__main__':
    app.run(debug=True)